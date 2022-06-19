
// getting all the required elements from the page 
	const droparrowimg = document.querySelector("#droparrowimg")
	const searchbar = document.getElementById("search_bar")
	const floors = document.getElementById('floors')
	const arrows = document.getElementById('arrows')
	const currentposition = document.getElementById("current_position")
	const searchlist = document.getElementById("search_bar");
	const searchinput = document.getElementById("searchinput")
	const img = "https://i.ibb.co/DLm1gF4/parking.jpg"

// used when to search the destination 
const searchfunction = ()=>{
	searchinput.addEventListener('keyup',(e)=>{
	const searchString = e.target.value.toLowerCase()
	const filteredlist = list.filter((item)=>{
		return(
			item.name.toLowerCase().includes(searchString)
			||item.room.toLowerCase().includes(searchString)

			);
	});
	objconverter(filteredlist);
});
}

// calling the function
searchfunction()


// use to display the main home page panorma img
const mainpage=()=>{
	const homepage = document.getElementById("homepage");
	homepage.setAttribute("style","opacity :0; visiblity:hidden");
	setTimeout(()=>{homepage.style.display = "none"; },200)
	panorama(img)
}

const searchback=()=>{
	
	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
	const classname= "search_bar";
	searchbar.className = classname;
	droparrowimg.setAttribute("class","")
	floors.style.display = "";
	arrows.style.display = "";
	currentposition.style.display = "";
	document.getElementById("searchlistexist").remove();

	}else{
		searchlistrooms()
	}
}
// making list of rooms 
const searchlistrooms=()=>{

	const classname= "search_bar "+"fullpage"
	droparrowimg.setAttribute("class","droparrowimg")
	searchbar.className = classname;
	floors.style.display = "none";
	arrows.style.display = "none";
	currentposition.style.display = "none";
	objconverter(list)
}


const objconverter=(object)=>{
	const flist = object.map((item)=>{
		return `
		<div onclick = "moveforward(${item.id})">
		<div id = "${item.id}">${item.room}</div>
		<div class = "teachname">${item.name}</div>
		</div>
		`
	}).join('');

	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
		document.getElementById("searchlistexist").innerHTML = flist;
	}else {
	const newhave = document.createElement('div');
	newhaveclassname = "center-align "+"container_list";
	newhave.setAttribute("class",newhaveclassname)
	newhave.setAttribute("id","searchlistexist")
	newhave.innerHTML = flist;
	searchlist.appendChild(newhave);}
}
const moveforward = (id) =>{
	const ida=id.getAttribute("id");
	const url = urllist[ida];
	console.log(url)
	panorama(url);
	searchlist.style.display="none";
	floors.style.display = "";
	arrows.style.display = "";
	currentposition.style.display = "";
}

const panorama=(url)=>{
	exisit_file = !!document.getElementsByClassName("psv-canvas-container")
	if (exisit_file == true){
		document.getElementById("panorama").innerHTML=""
	}

	var viewer = new PhotoSphereViewer.Viewer({
		container: 'panorama',
		loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
		touchmoveTwoFingers: true,
		mousewheelCtrlKey: true,
		caption    : 'Cape Florida Light, Key Biscayne <b>&copy; Pixexid</b>',
		defaultLong: '100deg',
		plugins    : [
		  PhotoSphereViewer.MarkersPlugin,
		  [PhotoSphereViewer.VirtualTourPlugin, {
			positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
			renderMode  : PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
		  }],
		],
		navbar: 'zoom move download nodesList caption fullscreen',
	  });
	  
	  var virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
	  
	  virtualTour.setNodes([
		{
		  id      : '1',
		  panorama: 'https://i.postimg.cc/GtcVfn4G/PANO-20220424-122029.jpg',
		  thumbnail: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-1-thumb.jpg',
		  name    : 'One',
		  links   : [
			{ nodeId: '2' },
		  ],
		  markers: [
			{
			  id: 'marker-1',
			  image: 'https://photo-sphere-viewer.js.org/assets/pin-red.png',
			  tooltip: 'Cape Florida Light, Key Biscayne',
			  width    : 32,
			  height   : 32,
			  anchor   : 'bottom center',
			  longitude: '105deg',
			  latitude: '35deg',
			}
		  ],
		  position: [-80.156479, 25.666725, 3],
		  panoData: { poseHeading: 327 },
		},
		{
		  id      : '2',
		  panorama: 'https://i.postimg.cc/GtcVfn4G/PANO-20220424-122029.jpg',
		  thumbnail: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-2-thumb.jpg',
		  name    : 'Two',
		  links   : [
			{ nodeId: '3' },
			{ nodeId: '1' },
		  ],
		  position: [-80.156168, 25.666623, 3],
		  panoData: { poseHeading: 318 },
		},
		{
		  id      : '3',
		  panorama: 'https://i.postimg.cc/GtcVfn4G/PANO-20220424-122029.jpg',
		  thumbnail: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-3-thumb.jpg',
		  name    : 'Three',
		  links   : [
			{ nodeId: '4' },
			{ nodeId: '2' },
			{ nodeId: '5' },
		  ],
		  position: [-80.155932, 25.666498, 5],
		  panoData: { poseHeading: 328 },
		},
		{
		  id      : '4',
		  panorama: 'https://i.postimg.cc/GtcVfn4G/PANO-20220424-122029.jpg',
		  thumbnail: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-4-thumb.jpg',
		  name    : 'Four',
		  links   : [
			{ nodeId: '3' },
			{ nodeId: '5' },
		  ],
		  position: [-80.156089, 25.666357, 3],
		  panoData: { poseHeading: 78 },
		},
		{
		  id      : '5',
		  panorama: 'https://i.postimg.cc/GtcVfn4G/PANO-20220424-122029.jpg',
		  thumbnail: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-5-thumb.jpg',
		  name    : 'Five',
		  links   : [
			{ nodeId: '6' },
			{ nodeId: '3' },
			{ nodeId: '4' },
		  ],
		  position: [-80.156292, 25.666446, 2],
		  panoData: { poseHeading: 190 },
		},
		{
		  id      : '6',
		  panorama: 'https://i.postimg.cc/GtcVfn4G/PANO-20220424-122029.jpg',
		  thumbnail: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-6-thumb.jpg',
		  name    : 'Six',
		  links   : [
			{ nodeId: '5' },
		  ],
		  position: [-80.156465, 25.666496, 2],
		  panoData: { poseHeading: 328 },
		},
	  ], '2');
// new PhotoSphereViewer.Viewer({
//   navbar:[
//   {"visible":false}
//   ],
//   panorama: url,
//   container: 'panorama',
//   caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
//   loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
//   defaultLat: 0.3,
//   touchmoveTwoFingers: true,
//   mousewheelCtrlKey: true,
// });

document.querySelector(".psv-markers-svg-container").style.display = "none";
document.querySelector(".psv-markers").style.display = "none";
document.querySelector(".psv-navbar").style.display="none";
}

const back=()=>{
	panorama(img);
	searchbar.style.display="";
	searchbar.className = "search_bar";
	document.getElementById("searchlistexist").innerHTML = "";
	droparrowimg.setAttribute("class","");
}

urllist = {
	"a1":"https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg",
	"a2":"https://i.ibb.co/DLm1gF4/parking.jpg",
	"a3":"https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg",
}