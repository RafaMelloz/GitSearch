import './styles.css';

import { TbFaceIdError } from "react-icons/tb";

export const BoxSearch = ({ data, error }) =>{
    return(
        <div className='Box Flex'>
           {!error ?
            <>
                <img src={data.avatar_url} alt={data.avatar_url} />
                <div className="Box__Description">
                    <h2>{data.name}</h2>
                    <a href={data.html_url}>@{data.login}</a>
                    <p>{data.bio}</p>
                    <div className='Box_Description__TableFoll'>
                        <ul>
                            <li>Seguidores <br />{data.followers}</li>
                            <li>Seguindo <br />{data.following}</li>
                            <li>Public repos <br />{data.public_repos}</li>
                        </ul>
                    </div>
                    {data.location ?
                        <span>Localidade: {data.location} </span>
                        :
                        null
                    }
                    <br />
                    {data.blog ?
                        <span>Blog: <a href={data.blog}>{data.blog}</a></span>
                        :
                        null
                    }
                </div>
            </>
            :
            <div className='error'>
                    <TbFaceIdError />
                   <h3>User não encontrado</h3>
            </div>
            }
        </div>
    )
}