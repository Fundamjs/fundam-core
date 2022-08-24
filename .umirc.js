export default {
  mode: 'site',
  title: 'Fundam',
  outputPath: './doc-site',
  hash: true,
  history: {
    type: 'hash',
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/antd/dist/antd.css',
    },
  ],
  navs: [
    {
      title: '组件文档',
      path: '/components',
    },
    {
      title: 'playground',
      path: '/playground',
      resolve: {
        previewLangs: false,
      },
    },
    {
      title: 'Github',
      path: 'https://github.com/Fundamjs/fundam-core',
    },
  ],
  styles: [
    `
		.__dumi-default-navbar nav > span:last-of-type {
			margin-right: 40px;
		}
		div.__dumi-default-layout[data-route="/playground"] {
		  padding-top: 0px !important;
		}
		[data-route="/playground"] .__dumi-default-navbar {
		  display: none !important;
		}
	`,
  ],
  // 打包配置
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    moment: 'window.moment',
    antd: 'window.antd',
    '@ant-design/icons': 'window.icons',
  },
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://unpkg.com/react@17.0.2/umd/react.development.js',
          'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js',
          'https://unpkg.com/antd@4.16.13/dist/antd.js',
          'https://unpkg.com/moment@2.29.1/moment.js', // moment
          'https://unpkg.com/@ant-design/icons@4.6.4/dist/index.umd.js',
        ]
      : [
          'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
          'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js',
          'https://unpkg.com/antd@4.16.13/dist/antd.js',
          'https://unpkg.com/moment@2.29.1/moment.js', // moment
          'https://unpkg.com/@ant-design/icons@4.6.4/dist/index.umd.js',
        ],
}
