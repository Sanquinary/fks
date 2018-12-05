# Vortex Implementation for UiO
Remember to have your website hosted somewhere as UiO Vortex doesn't support scripts directly executed.
Then create a iframe with the following CSS.

Host site: https://www.uio.no/for-ansatte/enhetssider/mn/ibv/kontostrenger/fks.html

```html
<style type="text/css">
	.resp-container {
	    position: relative;
	    padding-top: 100%;
	    height: 80vh;
	}

	.resp-iframe {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 1000px;
	    border: 0;
	}
</style>
<div class="resp-container">
	<iframe class="resp-iframe" src="https://folk.uio.no/mnkristi/fks/"></iframe>
</div>
```