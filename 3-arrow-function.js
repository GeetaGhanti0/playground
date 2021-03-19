const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    // ES 6 syntax 
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false);
        }
    }




console.log(tasks.getTasksToDo());