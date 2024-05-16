//first import the standard library
bring cloud;
//bring in the external library
bring ex;
//bring http library for testing
bring http;

//create all required resources
let Api = new cloud.Api() as "Worker API";
let Q = new cloud.Queue() as "Workersheet API Queue";
let Bucket = new cloud.Bucket() as "Workersheet Bucket";
let Schedule = new cloud.Schedule(rate: 10m);
let listCounter = new cloud.Counter( initial: 0 ) as "Filelist Counter";
let NamesBucket = new cloud.Bucket() as "Workerlist Bucket";
let Counter = new cloud.Counter( initial: 0 ) as "Workersheet Counter";

let WorkerTable = new ex.Table(
    name: "worker",
  primaryKey: "id",
  columns: {
    "name" => ex.ColumnType.STRING,
    "lastname" => ex.ColumnType.STRING,
    "job" => ex.ColumnType.STRING
  }
) as "Worker Table";
let workerCounter = new cloud.Counter( initial: 0 );

//Create API routes
Api.post("/worker", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
   if let body = request.body {
    let todoData = Json.parse(body);
    let id = "{workerCounter.inc()}";
    WorkerTable.insert(id, todoData);
    return cloud.ApiResponse {
      status: 201,
      body: id
    };
   }
});

Api.delete("/worker/:id", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
  let id = request.vars.get("id");
  WorkerTable.delete(id);
  return cloud.ApiResponse {
    status: 204
  };
});

Api.get("/workers", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
  let result = MutJson [];
  let var i = 0;
  for todo in WorkerTable.list() {
    result.setAt(i, todo);
    i = i + 1;
  }
  return cloud.ApiResponse {
    status: 200,
    body: Json.stringify(result)
  };
});

Api.get("/todo/:id", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
  let todo = WorkerTable.get(request.vars.get("id"));
  return cloud.ApiResponse {
    status: 200,
    body: Json.stringify(todo)
  };
});

Api.delete("/Workersheet/:id", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {   
    let id = request.vars.get("id");
    Bucket.delete("WorkerSheet${id}.txt");
    return cloud.ApiResponse { status: 200 };
});

Api.get("/Workersheet/:id", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
    let id = request.vars.get("id");
    let file = Bucket.get("WorkerSheet${Counter.peek()}.txt");
    return cloud.ApiResponse {
    status: 200,
    body: Json.stringify(file)
  };
});

Api.get("/Workersheets", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
  let var i = 0;
  let result = MutJson [];
  for file in Bucket.list() {
    result.setAt(i, file);
    i = i + 1;
  }
  return cloud.ApiResponse {
    status: 200,
    body: Json.stringify(result)
  };
});

Api.get("/Workerlist", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
    let id = request.vars.get("id");
    let file = NamesBucket.get("Workers_List_${id}.txt");
    return cloud.ApiResponse {
    status: 200,
    body: Json.stringify(file)
  };
});

Api.post("/Workersheet", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
    if let body = request.body {
        let todoData = Json.parse(body).get("content");
    Counter.inc();
    Q.push(str.fromJson(todoData));
    return cloud.ApiResponse { status: 200 };
}});

//configure Q
Q.setConsumer(inflight (message) => {
    Bucket.put("WorkerSheet${Counter.peek()}.txt", "${message}");
});

//setup a Schedule
Schedule.onTick(inflight () => {
   let filenamesArray = Bucket.list();
   listCounter.inc();
   NamesBucket.put("Workers_List_${listCounter.peek()}", filenamesArray.join(""));
});


//Test
test "test_getAllWorkersheets"{
    let response = http.get("${Api.url}/employees", {
  });
  assert(response.status == 200);
  assert(Bucket.list().length == 0); //find out how to count how many todos returned from the response
}
