A project is what needs to be done. We want to store the following data about a project:

    a unique ID.
    a name. This column is required.
    a description.
    a boolean that indicates if the project has been completed. This column is required, the default value should be false

    A resource is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a resource:

    a unique ID.
    a name. This column is required.
    a description.

The database should not allow resources with duplicate names.

A task is one of the steps needed to complete the project. We want to store the following data about an task.

    a unique ID.
    a description of what needs to be done. This column is required.
    a notes column to add additional information.
    a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be false.
