module.exports = (props) => {
  const body = props && props.body ? props.body : '';
  const template = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      <title>DraftJS Plugins (including the ultimate Unicorn Editor)</title>
      <script>
        if (window.location.href.indexOf('nikgraf.github.io/draft-js-plugins') !== -1) {
          // TODO improve redirect to redirect with the proper path
          window.location.href = 'https://www.draft-js-plugins.com/';
        }
      </script>
      <link rel="stylesheet" href="/css/normalize.css"/>
      <link rel="stylesheet" href="/css/base.css"/>
      <link rel="stylesheet" href="/css/Draft.css"/>
      <link rel="stylesheet" href="/app.css"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css"/>
      <link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>
    </head>
    <body>
      <div id="root">
        ${body}
      </div>
      <script src="/app.js"></script>
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-75176147-1', 'auto');
        ga('send', 'pageview');
      </script>
    </body>
  </html>`;
  return template.trim();
};