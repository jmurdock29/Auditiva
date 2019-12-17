using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AuditivaNetcore.Migrations
{
    public partial class AuditivaDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CalificacionesItems",
                columns: table => new
                {
                    CalificacionId = table.Column<string>(nullable: false),
                    CIdentificacion = table.Column<string>(nullable: true),
                    TitleTema = table.Column<string>(nullable: true),
                    NumbActividad = table.Column<string>(nullable: true),
                    NotaActividad = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CalificacionesItems", x => x.CalificacionId);
                });

            migrationBuilder.CreateTable(
                name: "CursoItems",
                columns: table => new
                {
                    CursoId = table.Column<string>(nullable: false),
                    PNombres = table.Column<string>(nullable: true),
                    PApellidos = table.Column<string>(nullable: true),
                    PGrado = table.Column<string>(nullable: true),
                    PTipo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CursoItems", x => x.CursoId);
                });

            migrationBuilder.CreateTable(
                name: "ProfesorItems",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    Nombres = table.Column<string>(nullable: true),
                    Apellidos = table.Column<string>(nullable: true),
                    Genero = table.Column<string>(nullable: true),
                    FechaNacimento = table.Column<DateTime>(nullable: false),
                    Telefono = table.Column<string>(nullable: true),
                    Correo = table.Column<string>(nullable: true),
                    Grado = table.Column<string>(nullable: true),
                    Tipo = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfesorItems", x => x.Identificacion);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CalificacionesItems");

            migrationBuilder.DropTable(
                name: "CursoItems");

            migrationBuilder.DropTable(
                name: "ProfesorItems");
        }
    }
}
