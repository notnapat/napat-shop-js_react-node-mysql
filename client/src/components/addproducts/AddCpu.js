// import axios from 'axios';

// import React,{Component} from 'react';

// class FileUpload extends React.Component{
 
//       const [file, setFile] = useState();
//       const [fileName, setFileName] = useState("");
 
//       const saveFile = (e) => {
//         setFile(e.target.files[0]);
//         setFileName(e.target.files[0].name);
//       };
 
//       const uploadFile = async (e) => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("fileName", fileName);
//         try {
//           const res = await axios.post(
//             "http://localhost:3000/upload",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
 
//     render(){
//       return (
//         <div className="App">
//           <input type="file" onChange={saveFile} />
//           <button onClick={uploadFile}>Upload</button>
//         </div>
//       );
//     }
// }
 
// export default FileUpload;

// class App extends Component {

// 	state = {

// 	// Initially, no file is selected
// 	selectedFile: null
// 	};
	
// 	// On file select (from the pop up)
// 	onFileChange = event => {
	
// 	// Update the state
// 	this.setState({ selectedFile: event.target.files[0] });
	
// 	};
	
// 	// On file upload (click the upload button)
// 	onFileUpload = () => {
	
// 	// Create an object of formData
// 	const formData = new FormData();
	
// 	// Update the formData object
// 	formData.append(
// 		"myFile",
// 		this.state.selectedFile,
// 		this.state.selectedFile.name
// 	);
	
// 	// Details of the uploaded file
// 	console.log(this.state.selectedFile);
	
// 	// Request made to the backend api
// 	// Send formData object
// 	axios.post("api/uploadfile", formData);
// 	};
	
// 	// File content to be displayed after
// 	// file upload is complete
// 	fileData = () => {
	
// 	if (this.state.selectedFile) {
		
// 		return (
// 		<div>
// 			<h2>File Details:</h2>
// 			<p>File Name: {this.state.selectedFile.name}</p>

// 			<p>File Type: {this.state.selectedFile.type}</p>

// 			<p>
// 			Last Modified:{" "}
// 			{this.state.selectedFile.lastModifiedDate.toDateString()}
// 			</p>

// 		</div>
// 		);
// 	} else {
// 		return (
// 		<div>
// 			<br />
// 			<h4>Choose before Pressing the Upload button</h4>
// 		</div>
// 		);
// 	}
// 	};
	
// 	render() {
	
// 	return (
// 		<div>
// 			<h1>
// 			GeeksforGeeks
// 			</h1>
// 			<h3>
// 			File Upload using React!
// 			</h3>
// 			<div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 		{this.fileData()}
// 		</div>
// 	);
// 	}
// }

// export default App;

// import React, {Component}  from 'react'
// import { useState } from 'react';
// import axios from 'axios';
 
// class FileUpload extends React.Component{
 
//       const [file, setFile] = useState();
//       const [fileName, setFileName] = useState("");
 
//       const saveFile = (e) => {
//         setFile(e.target.files[0]);
//         setFileName(e.target.files[0].name);
//       };
 
//       const uploadFile = async (e) => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("fileName", fileName);
//         try {
//           const res = await axios.post(
//             "http://localhost:3000/upload",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
 
//     render(){
//       return (
//         <div className="App">
//           <input type="file" onChange={saveFile} />
//           <button onClick={uploadFile}>Upload</button>
//         </div>
//       );
//     }
// }

// export default FileUpload
 
// export default FileUpload;import React, { useState } from 'react'
// import Axios from 'axios'

// function AddCpu() {

//     const addCpu = () => {
//         Axios.post('http://locahost:3001/create'), {

//         }
//     }
//   return (
//     <>

//     </>
//   )
// }

// export default AddCpu