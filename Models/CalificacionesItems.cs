using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
/// </Summary>
///

public class CalificacionesItem
{
    [JsonProperty("calificacionId")]
    [Key]
    public string CalificacionId { get; set; }

    [JsonProperty("cIdentificacion")]

    public string CIdentificacion { get; set; }

    [JsonProperty("titleTema")]

    public string TitleTema { get; set; }

    [JsonProperty("numbActividad")]
    public string NumbActividad { get; set; }

    [JsonProperty("notaActividad")]

    public string NotaActividad { get; set; }




}


