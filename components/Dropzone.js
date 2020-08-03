import React, {useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import  productoContext from '../context/productos/productoContext';

const Dropzone = () => {

    const { establecerImagen }=useContext(productoContext)

    //onDropAccepted
    const onDropAccepted=useCallback(async(acceptedFiles)=>{
        establecerImagen(acceptedFiles[0]);
    });

    //onDropRejected
    const onDropRejected=()=>{
        console.log('No se pudo subir');
    }

    //extrae contenido de dropzone
    const { getRootProps, getInputProps,isDragActive, acceptedFiles }=useDropzone({onDropAccepted, onDropRejected, maxSize:500000});

    const archivos=acceptedFiles.map(archivo=>(
        <li key={archivo.lastModified} className="text-2xl bg-gray-400 py-3 px-2">
            {archivo.path} 
        </li>
    ));

    return ( 
        <div className="md:flex border-dashed border-gray-400 border-2 px-4  w-full text-gray-500 text-center items-center">
            
            <div {...getRootProps({className: 'dropzone w-full py-12'})}>
                <input className="h-100" { ...getInputProps()}></input>
                {archivos.length>0 
                ?
                <ul>{archivos}</ul> 
                :
                <div className="text-center">
                    {isDragActive ? <p className="text-2xl">Suelta el archivo</p> : 
                    <p className="text-gray-500">Sube tu archivo aquí</p>
                    }
                </div>
                }
            </div>
        </div>
     );
}
 
export default Dropzone;