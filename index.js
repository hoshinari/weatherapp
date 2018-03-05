
$(function () {
	var api_key = "fc89915741cbc737bd3188d3c6846b80";
	var api_url= "http://api.openweathermap.org/data/2.5/forecast"
	var query = api_url + "?q=kagoshima-shi,jp&APPID=" +api_key;

	var dt = new Date()

	$.ajax({
		type: "get",
		url: query,
		dataType: "json",
		success: function(data, dataType){
			console.log(data);

			$("#weatherList").append(
			"<tr><th>サイト</th><th>"
			+(dt.getMonth()+1) + "月" + (dt.getDate()) + "日"+
			"</th><th>" + (dt.getMonth()+1) + "月" + (dt.getDate()+1) + "日" +
			"</th><th>" + (dt.getMonth()+1) + "月" + (dt.getDate()+2) + "日" +
			"</th><th>" + (dt.getMonth()+1) + "月" + (dt.getDate()+3) + "日" +
			"</th><th>" + (dt.getMonth()+1) + "月" + (dt.getDate()+4) + "日" +
			"</th></tr>")

			$("#weatherList").append(
			"<td>openweather</td><td>"
			+data.list[8].weather[0].main+
			"</td><td>"+data.list[8].weather[0].main+
			"</td><td>"+data.list[16].weather[0].main+
			"</td><td>"+data.list[24].weather[0].main+
			"</td><td>"+data.list[32].weather[0].main+
			"</td><td>")
			
			$("#aaa").html(dt.getMonth()+1 + "月" + dt.getDate() + "日");
		}
	});
	
});