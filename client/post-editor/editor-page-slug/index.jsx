/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';

/**
 * Internal Dependencies
 */
import EditorSlug from 'post-editor/editor-slug';
import Gridicon from 'gridicons';

export default class PostEditorPageSlug extends PureComponent {
	static propTypes = {
		path: PropTypes.string
	};

	render() {
		return (
			<EditorSlug path={ this.props.path } instanceName="page-permalink">
				<Gridicon icon="link" />
			</EditorSlug>
		);
	}
}
