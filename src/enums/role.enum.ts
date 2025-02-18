export const Roles = {
    OWNER: "OWNER",
    ADMIN: "ADMIN",
    MEMBER: "MEMBER",
  } as const;
  
  export type RoleType = keyof typeof Roles;
  
  export const Permissions = {
    CREATE_WORKSPACE: "CREATE_WORKSPACE",
    DELETE_WORKSPACE: "DELETE_WORKSPACE",
    EDIT_WORKSPACE: "EDIT_WORKSPACE",
    MANAGE_WORKSPACE_SETTINGS: "MANAGE_WORKSPACE_SETTINGS",
  
    ADD_MEMBER: "ADD_MEMBER",
    CHANGE_MEMBER_ROLE: "CHANGE_MEMBER_ROLE",
    REMOVE_MEMBER: "REMOVE_MEMBER",
  
    CREATE_PROJECT: "CREATE_PROJECT",
    EDIT_PROJECT: "EDIT_PROJECT",
    DELETE_PROJECT: "DELETE_PROJECT",
  
    CREATE_TASK: "CREATE_TASK",
    EDIT_TASK: "EDIT_TASK",
    DELETE_TASK: "DELETE_TASK",
  
    VIEW_ONLY: "VIEW_ONLY",
  } as const;
  
  export type PermissionType = keyof typeof Permissions;