
var client;
var topicArray = []
$('#btnoff').on('click', function () {
	// connect
	var connect = "connect button clicked.."
	console.log(connect)
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
	client.on("connect", function () {
		var topic = "cabalhao/fan/status"
		var message = "Fan is turned off!"
		client.publish(topic, message);
		document.getElementById("message").innerHTML = "Fan is turn off";
		console.log("Successfully connected");
	})
	
})

$('#btn1').on('click', function () {
	// connect
	var connect = "connect button clicked.."
	console.log(connect)
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
	client.on("connect", function () {
		var topic = "cabalhao/fan/status"
		var message = "Fan is turned to 1!"
		client.publish(topic, message);
		document.getElementById("message").innerHTML ="Fan is turned to 1!";
		console.log("Successfully connected");
	})
	
})

$('#btn2').on('click', function () {
	// connect
	var connect = "connect button clicked.."
	console.log(connect)
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
	client.on("connect", function () {
		var topic = "cabalhao/fan/status"
		var message = "Fan is turned to 2!"
		client.publish(topic, message);
		document.getElementById("message").innerHTML ="Fan is turned to 2!";
		console.log("Successfully connected");
	})
	
})
	$('#btn3').on('click', function () {
	// connect
	var connect = "connect button clicked.."
	console.log(connect)
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
	client.on("connect", function () {
		var topic = "cabalhao/fan/status"
		var message = "Fan is turned to 3!"
		client.publish(topic, message);
		document.getElementById("message").innerHTML ="Fan is turned to 3!";
		console.log("Successfully connected");
	})
	
})
















