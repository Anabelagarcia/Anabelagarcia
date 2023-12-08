import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detalhe(){
    const {id} = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));

    const produto = lista.filter( (objeto) => {
        if(objeto.id == id){
            return objeto;
        }
        return null;
     })
   return (
      <div>
       <h1>{produto.nome}</h1>
      </div>
   )
}