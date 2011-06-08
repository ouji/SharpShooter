/* Work on this class was inspired by EaselJS' Ticker class by Grant Skinner */
/* Visit http://easeljs.com/ */

(function(window){
	Ticker = function(){
		throw "Ticker is static and can't be instantiated.";
	}

	Ticker._listeners = [];
	
	Ticker._pausable = [];
	
	Ticker._paused = false;	
	
	Ticker._inited = false;
	
	Ticker._startTime = 0;
	
	Ticker._pauseTime = 0;
	
	Ticker._ticks = 0;
	
	Ticker._pausedTicks = 0;
	
	Ticker._fps = 60;
	
	Ticker._intervalID = null;
	
	Ticker._lastTime = 0;
	
	
	
}(window))
