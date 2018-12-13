import _ from "lodash";
import Vue from "vue";
import gitlab from "@/gitlab";

export default {
  addTodo({ todos }, todo) {
    Vue.set(todos, todo.id, todo);
  },

  removeTodo({ todos }, todo) {
    Vue.delete(todos, todo.id);
  },

  setTodoSize(state, size) {
    state.todoSize = parseInt(size);
  },

  addProject({ projects }, project) {
    Vue.set(projects, project.id, project);
  },

  setTodos(state, todos) {
    state.todos = todos;
  },

  setProjects(state, projects) {
    state.projects = projects;
  },

  addMergeRequest({ mergeRequests }, mergeRequest) {
    Vue.set(mergeRequests, mergeRequest.id, mergeRequest);
  },

  removeMergeRequest({ mergeRequests }, mergeRequest) {
    Vue.delete(mergeRequests, mergeRequest.id);
  },

  setMergeRequests(state, mergeRequests) {
    state.mergeRequests = mergeRequests;
  },

  resetMergeRequests(state) {
    state.mergeRequests = {};
  },

  updateMergeRequest({ mergeRequests }, mergeRequest) {
    Vue.set(mergeRequests, mergeRequest.id, mergeRequest);
  },

  setCurrentTeam(state, teamName) {
    const team = _.find(state.teams, { name: teamName });

    state.team = team;
  },

  addTeam(state, team) {
    state.teams.push(team);
    localStorage.setItem("teams", JSON.stringify(state.teams));
  },

  resetTeams(state) {
    localStorage.setItem("teams", JSON.stringify([]));
    state.teams = {};
    state.team = {};
  },

  updatePipeline({ pipelines }, { mergeRequest, pipeline }) {
    Vue.set(pipelines, mergeRequest.id, pipeline);
  },

  removePipeline({ pipelines }, { mergeRequest }) {
    Vue.delete(pipelines, mergeRequest.id);
  },

  setPipelines(state, pipelines) {
    state.pipelines = pipelines;
  },

  updateSettings(state, settings) {
    state.apiEndpoint = settings.apiEndpoint;
    state.apiToken = settings.apiToken;
    localStorage.setItem("apiEndpoint", state.apiEndpoint);
    localStorage.setItem("apiToken", state.apiToken);
    // FIXME: This MUST not be here
    gitlab.get().unwatchUser();
    gitlab.get().unwatchMergeRequests();
    gitlab.init(this);
  },

  setUsers(state, users) {
    state.team.users = users;
  },

  setCurrentUser(state, user) {
    state.currentUser = user;
  }
};