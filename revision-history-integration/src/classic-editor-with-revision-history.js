/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import BaseEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import RevisionHistory from '@ckeditor/ckeditor5-revision-history/src/revisionhistory';
import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges';
import Comments from '@ckeditor/ckeditor5-comments/src/comments';
import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import CKBoxPlugin from '@ckeditor/ckeditor5-ckbox/src/ckbox';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

import * as CKBox from 'ckbox';
import 'ckbox/dist/styles/ckbox.css';

class ClassicEditorWithRevisionHistory extends BaseEditor {}

ClassicEditorWithRevisionHistory.builtinPlugins = [
	Alignment,
	Autoformat,
	Autosave,
	BlockQuote,
	Bold,
	CKBoxPlugin,
	PictureEditing,
	CloudServices,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	Strikethrough,
	Table,
	TableToolbar,
	Underline,
	Comments,
	TrackChanges,
	RevisionHistory
];

ClassicEditorWithRevisionHistory.defaultConfig = {
	// CKBox configuration is added only for the CKBox integration. This configuration should not be used in
	// a production environment. It is not needed for other collaboration features. See https://ckeditor.com/ckbox/
	ckbox: {
		tokenUrl: 'https://dev.ckbox.io/demo/token/'
	},
	toolbar: [
		'revisionHistory',
		'|',
		'heading',
		'|',
		'bold',
		'italic',
		'underline',
		'strikethrough',
		'removeFormat',
		'|',
		'numberedList',
		'bulletedList',
		'|',
		'undo',
		'redo',
		'|',
		'trackChanges',
		'comment',
		'|',
		'ckbox',
		'imageUpload',
		'link',
		'blockquote',
		'insertTable',
		'mediaEmbed'
	],
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'comment'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		],
		tableToolbar: [ 'comment' ]
	},
	comments: {
		editorConfig: {
			extraPlugins: [ Bold, Italic, Underline, List, Autoformat ]
		}
	}
};

export default { EditorWatchdog, ClassicEditorWithRevisionHistory, CKBox };
