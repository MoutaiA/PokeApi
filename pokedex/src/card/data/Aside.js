import React from 'react';

function Aside(props) {

	const formatType = () => {
		return props.pokemon.type.map((el, id) => id + 1 < props.pokemon.type.length ? el + ' - ' : el)
	}

	const formatHeight = () => {
		return <td>{(props.pokemon.height % 100) / 10} m</td>
	}

	const formatWeight = () => {
		return <td>{(props.pokemon.weight) / 10} kg</td>
	}

	return (
		<div className="aside-container">
			<div className="aside-container-title">
				<div>N° {props.pokemon.id}</div>
				<div>{props.pokemon.name}</div>
			</div>
			<div className="aside-container-image">
				<img src={props.pokemon.official} alt="Official pokemon" />
			</div>
			<div className="aside-container-info">
				<table>
					<tbody>
						<tr>
							<th>Type</th>
							<td>{formatType()}</td>
						</tr>
						<tr>
							<th>Height</th>
							{formatHeight()}
						</tr>
						<tr>
							<th>Weight</th>
							{formatWeight()}
						</tr>
						<tr>
							<th>Experience</th>
							<td>{props.pokemon.exp}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Aside