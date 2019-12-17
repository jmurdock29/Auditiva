using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
/// </Summary>
///

public class CursoItem
{
    [JsonProperty("cursoId")]
    [Key]
    public string CursoId { get; set; }

    [JsonProperty("pNombres")]

    public string PNombres { get; set; }

    [JsonProperty("pApellidos")]

    public string PApellidos { get; set; }

    [JsonProperty("pGrado")]
    public string PGrado { get; set; }

    [JsonProperty("pTipo")]

    public string PTipo { get; set; }




}


