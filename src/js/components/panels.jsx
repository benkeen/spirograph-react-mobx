import React from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import Spirograph from './spirograph';


@observer
class Panels extends React.Component {
	getPanels () {
		const { panels } = this.props.store;

		return _.map(panels, (panel, i) => {
			return (
				<Panel
					key={i}
					onDelete={this.props.store.removePanel}
					panel={panel}
				/>
			);
		});
	}

	render () {
		return (
			<section>
				<ol id="spirographs">
					{this.getPanels()}
				</ol>
			</section>
		);
	}
}


@observer
class Panel extends React.Component {

	getTab () {
		if (this.props.panel.currTab === 'general') {
			return <GeneralTab {...this.props} />;
		} else {
			return <StylesTab {...this.props} />;
		}
	}

	render () {
		const panel = this.props.panel;
		const generalTabClass = (panel.currTab === 'general') ? 'selected' : '';
		const stylesTabClass = (panel.currTab === 'styles') ? 'selected' : '';

		return (
			<li>
				<div className="spiro-tabs">
					<div className="spiro-controls">
						<a href="#" className="destroy" title="Close this panel" onClick={(e) => this.props.onDelete(panel.id)}>x</a>
					</div>
					<ol>
						<li className={generalTabClass}><a href="#" onClick={(e) => panel.selectTab('general')}>General</a></li>
						<li className={stylesTabClass}><a href="#" onClick={(e) => panel.selectTab('styles')}>Styles</a></li>
					</ol>
				</div>

				<section className="tabContent">
					<div className="well">
						{this.getTab()}
					</div>
				</section>

				<div className="well well-small">
					<span className="spinner" />
					<button className="btn-small btn-primary actionButton" onClick={(e) => panel.draw()}>Draw &raquo;</button>
				</div>

				<div className="canvasWrapper">
					<Spirograph
						isDrawing={panel.isDrawing}
						updateCanvasSize={panel.updateCanvasSize}
						innerRadiusInPixels={panel.innerRadiusInPixels}
						outerRadiusInPixels={panel.outerRadiusInPixels}
						maxLoops={panel.maxLoops}
						lineThickness={panel.lineThickness}
						lineColor={panel.lineColor}
						lineTransparency={panel.lineTransparency}
						speed={panel.speed}
						innerCircleSizePercentage={panel.innerCircleSizePercentage}
						pointFromCenterInPixels={panel.pointFromCenterInPixels}
					/>
				</div>
			</li>
		);
	}
}


@observer
class GeneralTab extends React.Component {
	render () {
		const panel = this.props.panel;
		const { id, innerCircleSizePercentage, pointFromCenterPercentage, speed } = panel;

		return (
			<table className="table">
				<tbody>
					<tr>
						<td><label htmlFor={`innerCircleSizePercentage${id}`}>Inner Circle Size</label></td>
						<td>
							<input type="range" className="innerCircleSizePercentage" id={`innerCircleSizePercentage${id}`}
								value={innerCircleSizePercentage} min="1" max="99" onChange={(e) => { panel.setInnerCircleSizePercentage(e.target.value)} } />
							<ol className="rangeTip">
								<li className="rangeTipLeft">Small</li>
								<li className="rangeTipRight">Large</li>
							</ol>
						</td>
					</tr>
					<tr>
						<td><label htmlFor={`pointFromCenterPercentage${id}`}>Point from Center</label></td>
						<td>
							<input type="range" className="pointFromCenterPercentage" id={`pointFromCenterPercentage${id}`}
								value={pointFromCenterPercentage} min="1" max="99" onChange={(e) => { panel.setPointFromCenterPercentage(e.target.value)} } />
							<ol className="rangeTip">
								<li className="rangeTipLeft">Small</li>
								<li className="rangeTipRight">Large</li>
							</ol>
						</td>
					</tr>
					<tr>
						<td><label htmlFor={`speed${id}`}>Speed</label></td>
						<td>
							<input type="range" className="speed" id={`speed${id}`} value={speed} min="10" max="300"
								onChange={(e) => { panel.setSpeed(e.target.value)} } />
							<ol className="rangeTip">
								<li className="rangeTipLeft">Slow</li>
								<li className="rangeTipRight">Fast</li>
							</ol>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

@observer
class StylesTab extends React.Component {
	render () {
		const { id, lineThickness, lineTransparency, lineColorHex } = this.props.panel;

		return (
			<table className="table">
				<tbody>
				<tr>
					<td><label htmlFor="lineThickness<%= cid %>">Line Thickness</label></td>
					<td>
						<input type="range" className="lineThickness" id={`lineThickness${id}`} value={lineThickness}
							min="1" step="1" max="10" />
						<ol className="rangeTip">
							<li className="rangeTipLeft">Thin</li>
							<li className="rangeTipRight">Thick</li>
						</ol>
					</td>
				</tr>
				<tr>
					<td><label htmlFor={`lineTransparency${id}`}>Line Transparency</label></td>
					<td>
						<input type="range" className="lineTransparency" id={`lineTransparency${id}`} value={lineTransparency}
							min="0.01" step="0.01" max="1" />
						<ol className="rangeTip">
							<li className="rangeTipLeft">Transparent</li>
							<li className="rangeTipRight">Solid</li>
						</ol>
					</td>
				</tr>
				<tr>
					<td><label htmlFor={`lineColour${id}`}>Line Colour</label></td>
					<td>
						<div className="cpicker input-append color" data-color={lineColorHex} data-color-format="hex" id={`lineColour${id}`}>
							<input type="text" className="span2" value={lineColorHex} />
							<span className="add-on"><i style={{ backgroundColor: lineColorHex }} /></span>
						</div>
					</td>
				</tr>
				</tbody>
			</table>
		);
	}
}

export default Panels;
