var x=false;
var caveData ={
	info:{
		layout:[
			[5,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4,4,4,5],
			[5,6,6,6,6,6,6,6,1,6,6,6,6,6,6,6,6,6,6,6,6,6,1,6,6,6,6,6,6,6,6,6,6,6,5],
			[5,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,x,x,12,x,x,x,x,x,x,x,x,x,x,x,5],
			[5,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5],
			[5,x,x,x,x,x,x,x,12,x,x,x,x,x,x,11,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5],
			[x,x,x,x,11,11,x,x,x,x,x,x,x,x,11,1,11,x,x,x,x,x,11,x,x,x,x,x,x,x,x,x,2,x,5],
			[x,x,x,x,1,1,x,x,x,x,x,x,x,x,1,1,1,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,3,x,5],
			[5,x,x,x,1,1,x,x,x,x,x,x,x,x,1,1,1,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,5]
			
			
		],
		src:`images/bg2.png`,
	},
	states:
	[		
		//column 1
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			//column 2
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			//column 3
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			//column 4
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			//column 5
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			//column 6
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			//column 7
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			//column 8
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			//column 9
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			},
			//column 10
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY:0}]
			},
			//column 11
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:640, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:704, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:768, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,9,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,8,8,8,8,8,8,8],
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			],
			src:`images/bg2.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[5,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,5],
					[5,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5],
					[5,x,x,x,x,x,x,x,1,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5],
					[x,x,x,x,1,1,x,x,x,x,x,x,x,x,1,1,1,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,5],
					[x,x,x,x,1,1,x,x,x,x,x,x,x,x,1,1,1,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,5],
					[5,x,x,x,1,1,x,x,x,x,x,x,x,x,1,1,1,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,5]
					
					
				],
				src:`images/bg2.png`,
			},
			states:caveData.states
			
			}