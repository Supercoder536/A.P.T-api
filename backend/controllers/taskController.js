//@desc     Get Tasks
//@method   GET api/areas/:id/projects/:pid/tasks
//@access   Private
const getTasks = (req, res) => {
  res.status(200).json({
    message: `Get tasks from project ${req.params.pid} in area ${req.params.id}`,
  });
};

//@desc     Create Task
//@method   POST api/areas/:id/projects/:pid/tasks
//@access   Private
const createTask = (req, res) => {
  res.status(200).json({
    message: `Create task in project ${req.params.pid} in area ${req.params.id}`,
  });
};

//@desc     Update Tasks
//@method   PUT api/areas/:id/projects/:pid/tasks/:tid
//@access   Private
const updateTasks = (req, res) => {
  res.status(200).json({
    message: `Update task ${req.params.tid} from project ${req.params.pid} in area ${req.params.id}`,
  });
};

//@desc     Delete Tasks
//@method   DEL api/areas/:id/projects/:pid/tasks/:tid
//@access   Private
const deleteTasks = (req, res) => {
  res.status(200).json({
    message: `Delete task ${req.params.tid} from project ${req.params.pid} in area ${req.params.id}`,
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTasks,
  deleteTasks,
};
