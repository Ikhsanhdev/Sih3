using System;
using System.Collections.Generic;
using Sih3.Models;
using Microsoft.EntityFrameworkCore;

namespace Sih3.Data;

public partial class Sih3Context : DbContext {
    public Sih3Context() {}

    public Sih3Context(DbContextOptions<Sih3Context> options) : base(options) {}

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql("name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.HasPostgresExtension("uuid-ossp");

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}