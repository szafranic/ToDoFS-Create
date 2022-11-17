using System;
using System.Collections.Generic;

namespace ToDoFS.Models;

public partial class ToDo
{
    public int Id { get; set; }

    public string? Description { get; set; }

    public bool? IsCompleted { get; set; }
}
