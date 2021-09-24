import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { OverviewContainer, Row } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index'

const SkillsOverview = () => {
	const [values, setValues] = useState({
		skills: [],
	})
	const url = `${process.env.REACT_APP_API}/skills`

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			method: 'GET',
		})
			.then((res) => res.json())
			.then((res) => {
				if (!unmounted) {
					setValues({ ...values, skills: res.data })
				}
			})
			.catch((err) => console.error(err))

		return () => {
			unmounted = true
		}
	}, [])

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

	return (
		<OverviewContainer>
			<Link to="/admin/create-skill">Create Skill</Link>
			<ul>
				{values.skills.map((skill, i) => (
					<li key={i}>
						<Row>
							<PSmall>Skill name: {skill.name}</PSmall>
							<button data-id={skill._id} onClick={handleDelete}>
								Delete
							</button>
							<Link to={`/admin/edit-skill/${skill.name.toLowerCase()}`}>
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
