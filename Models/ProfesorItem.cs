using Newtonsoft.Json;
using System;
using System.Data;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
/// </Summary>
///

public class ProfesorItem
{

    [JsonProperty("identificacion")]
    [Key]
    public string Identificacion { get; set; }

    [JsonProperty("nombres")]

    public string Nombres { get; set; }

    [JsonProperty("apellidos")]

    public string Apellidos { get; set; }
    [JsonProperty("genero")]

    public string Genero { get; set; }

    [JsonProperty("fechaNacimento")]

    public DateTime FechaNacimento { get; set; }
    [JsonProperty("telefono")]

    public string Telefono { get; set; }

    [JsonProperty("correo")]
    [ EmailAddress]
    public string Correo { get; set; }

    [JsonProperty("grado")]
    public string Grado { get; set; }

    [JsonProperty("tipo")]

    public string Tipo { get; set; }

    [JsonProperty("password")]
    [Required]

    public string Password { get; set; }



}


