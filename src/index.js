// declare a variable canvas
// call the method querySelector on the object document, with the argument 'canvas'

const canvas = document.querySelector( 'canvas' ); 
const c2d = canvas.getContext( '2d' );

const ball = {
	radius: 15,
	position: {
		x: 0,
		y: 0
	},
	velocity: {
		direction: Math.PI * 8 / 4,
		magnitude: .5
	}
};


/** @param {number} t */
function render( t ) {
	c2d.clearRect( 0, 0, canvas.width, canvas.height );
	c2d.beginPath();
	c2d.arc( canvas.width * .5 + ball.position.x, canvas.height * .5 - ball.position.y, ball.radius, 0, Math.PI * 2 );
	c2d.closePath();
	c2d.fillStyle = 'silver';
	c2d.fill();
	c2d.strokeStyle = 'white';
	c2d.stroke();
	ball.position.x = ball.position.x + Math.cos(ball.velocity.direction) * ball.velocity.magnitude;
	ball.position.y = ball.position.y + Math.sin(ball.velocity.direction) * ball.velocity.magnitude;
	ball.velocity.direction = ball.velocity.direction + 0.01;
	// alert( `${ball.x} ${ball.y}` );
	requestAnimationFrame(render);
}

requestAnimationFrame(render);
