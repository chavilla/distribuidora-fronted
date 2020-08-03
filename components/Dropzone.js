import React, {useCallback, useState, useContext, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import  productoContext from '../context/productos/productoContext';

const Dropzone = () => {

    const { establecerImagen }=useContext(productoContext)
    const [imagenExito, setImagenExito]=useState(false);

    //onDropAccepted
    const onDropAccepted=useCallback(async(acceptedFiles)=>{
        console.log(acceptedFiles[0].type);
        if (acceptedFiles[0].type ==='image/jpeg' || acceptedFiles[0].type ==='image/jpg' || acceptedFiles[0].type ==='image/png') {
            establecerImagen(acceptedFiles[0]);
            setImagenExito(false);     
        }
        else{
            setImagenExito(true);
        }       
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
        <> 
        <div className="md:flex border-dashed border-gray-400 border-2 px-4  w-full text-gray-500 text-center items-center">
            
            <div {...getRootProps({className: 'dropzone w-full py-12'})}>
                <input className="h-100" { ...getInputProps()}></input>
                {archivos.length>0 && !imagenExito
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
         {imagenExito 
            ?
            <> 
            <p className="bg-red-500 text-white text-center py-4">El tipo de archivo no es válido</p>
            </>
            :null
        }
        </>
     );
}
 
export default Dropzone;