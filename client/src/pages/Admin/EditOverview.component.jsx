import React from 'react'
import { Link } from 'react-router-dom'
import { useApiData } from '../../utils/hooks'

import { OverviewContainer, Row } from './AdminGeneral.styles'
import CIndex from '../../components/components.index'
import auth from '../../utils/auth.js'
const { checkAuthToken } = auth

const EditOverview = ({ name, nameSingular }) => {
  const url = `${process.env.REACT_APP_API}/${name}`
  const [apiData, dataProcessed] = useApiData(url)
  const { token } = checkAuthToken()

  const handleDelete = (e) => {
    const deleteUrl = `${process.env.REACT_APP_API}/${name}/${e.target.dataset.id}`
    fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
      .catch((err) => console.error(err))
  }

  const {
    TComp: { PSmall },
    Spinner,
    DeletePrompt,
  } = CIndex

  const { data } = apiData

  return (
    <OverviewContainer>
      <div className="top-row">
        <Link className="create-link" to={`/admin/create-${nameSingular}`}>
          Create {nameSingular}
        </Link>
        <DeletePrompt url={url} />
      </div>
      <ul>
        {dataProcessed ? (
          Object.keys(data).map((item, i) => (
            <li key={i}>
              <Row>
                <PSmall className="name">{data[item].name}</PSmall>
                <button
                  className="delete-button"
                  data-id={data[item]._id}
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <Link
                  className="edit-button"
                  to={`/admin/edit-${nameSingular}/${data[item].slug}`}
                >
                  Edit {nameSingular}
                </Link>
              </Row>
            </li>
          ))
        ) : (
          <Spinner />
        )}
      </ul>
    </OverviewContainer>
  )
}

export default EditOverview
