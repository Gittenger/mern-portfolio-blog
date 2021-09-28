import React from 'react'
import { Link } from 'react-router-dom'
import { useApiData } from '../../../utils/hooks'

import { OverviewContainer, Row } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index'

const SkillsOverview = () => {
	const url = `${process.env.REACT_APP_API}/skills`
	const [apiData, dataProcessed] = useApiData(url)

	const handleDelete = (e) => {
		const deleteUrl = `${process.env.REACT_APP_API}/skills/${e.target.dataset.id}`
		fetch(deleteUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
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
	} = CIndex

	const { data } = apiData

	return (
		<OverviewContainer>
			<Link to="/admin/create-skill">Create Skill</Link>
			<ul>
				{dataProcessed &&
					Object.keys(data).map((skill, i) => (
						<li key={i}>
							<Row>
								<PSmall>Skill name: {data[skill].name}</PSmall>
								<button data-id={data[skill]._id} onClick={handleDelete}>
									Delete
								</button>
								<Link
									to={`/admin/edit-skill/${data[skill].name.toLowerCase()}`}
								>
									Edit Skill
								</Link>
							</Row>
						</li>
					))}
			</ul>
		</OverviewContainer>
	)
}

export default SkillsOverview