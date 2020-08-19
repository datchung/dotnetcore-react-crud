using System;

namespace DotNetCoreReactCrud.Models
{
    public class Note
    {
        public Guid NoteId { get; set; }
        public string User { get; set; }
        public string Message { get; set; }
    }
}
