//@desc     Create Project
//@method   POST api/areas/:id/projects
//@access   Private
const getProjects = (req, res) => {
  res.status(200).json({ message: `Get projects in area ${req.params.id}` });
};

//@desc     Create Project
//@method   POST api/areas/:id/projects
//@access   Private
const createProject = (req, res) => {
  res.status(200).json({ message: `Create project in area ${req.params.id}` });
};

//@desc     Update Project
//@method   PUT api/areas/:id/projects/:pid
//@access   Private
const updateProject = (req, res) => {
  res.status(200).json({
    message: `Update project ${req.params.pid} in area ${req.params.id}`,
  });
};

//@desc     Update Project
//@method   PUT api/areas/:id/projects/:pid
//@access   Private
const deleteProject = (req, res) => {
  res.status(200).json({
    message: `Delete project ${req.params.pid} in area ${req.params.id}`,
  });
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
