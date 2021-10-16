import React, { useState, useEffect, FormEvent } from "react";

import * as Component from "../styles/pages/Home";

import Header from "../components/Header";
import PhotoItem from "../components/PhotoItem";
import { getAll, insert } from "../services/photos";
import { Photo } from "../types/Photo";

const Home = ()=>{
    const [ uploading, setUpLoading ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ photos, setPhotos ] = useState<Photo[]>([]);

    useEffect(()=>{
        const getphotos = async ()=>{
            setLoading(true);
            setPhotos(await getAll());
            setLoading(false);
        }
        getphotos();
    }, []);

    async function handleFormSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const file = formData.get("image") as File;
        if(file && file.size > 0){
            setUpLoading(true);
            let result = await insert(file);
            setUpLoading(false);
            if(result instanceof Error){
                alert(`${result.name} - ${result.message}`);
            } else {
                let newPhotoList = [...photos];
                newPhotoList.push(result);
                setPhotos(newPhotoList);
            }
        }
    }

    return(
        <Component.Container>
            <Component.Area>
                <Header />
                <Component.UploadImage method="POST" onSubmit={handleFormSubmit}>
                    <input type="file" name="image"/>
                    <input type="submit" value="Enviar"/>
                    {
                        uploading && "Enviando...."
                    }
                </Component.UploadImage>
                {
                    loading && 
                    <Component.ScreenWarning>
                        <span className="emoji">✋</span>
                        <br/>
                        <br/>
                        <span>Carregando....</span>
                    </Component.ScreenWarning>
                }
                {
                    (!loading) && (photos.length === 0) && 
                    <Component.ScreenWarning>
                        <span className="emoji">😭</span>
                        <br/>
                        <br/>
                        <span>Não exite imagens cadastradas</span>
                    </Component.ScreenWarning>
                }
                {
                    (!loading) && (photos.length > 0) && 
                    <Component.PhotoList>
                        {
                            photos.map((item, index)=>(
                                <PhotoItem 
                                    key={index} 
                                    name={item.name} 
                                    url={item.url}
                                />
                            ))
                        }
                    </Component.PhotoList>
                }
            </Component.Area>
        </Component.Container>
    );
}

export default Home;