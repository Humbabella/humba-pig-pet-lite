HPiggy = new function () {
	var p = document.getElementById("PiggyFrame")
	var s = p.style;
	console.log(s);
	s.position="absolute";
	s.height="62px";
	s.width="88px";
	s.backgroundImage = "url('https://humbabella.github.io/humba-pig-pet-lite/piggysprite.png')";
	s.overflow = "hidden";
	var c=0, t;
	var fps = 24;
	function Next () {
		c++;
		if (c==60) c=0;
		var x = -(c%10)*88, y = -Math.floor(c/10)*62;
		s.backgroundPosition = x+"px "+y+"px"
		if (c==0) clearInterval(t)}
	this.Pet = function () {
		if (c!=0) return;
		t = setInterval(Next, 1000/fps)}
	p.addEventListener('click', this.Pet)
}
