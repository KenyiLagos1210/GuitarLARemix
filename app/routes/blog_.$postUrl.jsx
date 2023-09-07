import { isRouteErrorResponse, useRouteError, Link, useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers"
import styles from "~/styles/blog.css"


export function links(){
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
}

export function meta({data}){

    if(!data || Object.keys(data).length === 0){
      return [
        { title: 'GuitarLA - Entrada No Encontrada' },
        { description: 'GuitarLA - venta de guitarras, Entrada No Encontrada' }
      ];
    }
  
    return [
      { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
      { description: `GuitarLA - venta de guitarras, entrada ${data.data[0].attributes.titulo}` }
    ];
  }

export async function loader({params}){
    const {postUrl} = params
    const post = await getPost(postUrl)

    if(post.data.length === 0){
        throw new Response('', {
          status: 404,
          statusText: 'Entrada No Encontrada',
          data: {}
        })
      }

    return post
}

export function ErrorBoundary(){
    const error = useRouteError()
    if(isRouteErrorResponse(error)){
        return (
          <>
            <p className="error">
              {error.status} {error.statusText}
            </p>
            <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal</Link>
          </>
        )
    }
  
    return (
      <>
        <p className="error">
          {error.status} {error.statusText}
        </p>
        <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal</Link>
      </>
    )
}


function Post() {

    const post = useLoaderData()
    const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes

  return (
    <article className="contenedor post mt-3">
        <img className="imagen" src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Post