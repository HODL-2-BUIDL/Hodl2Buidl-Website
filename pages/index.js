import Image from 'next/image';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
	  jqueryInitialCode();
  },[])

  return (
    <>
			<div id="wrapper">
					<header id="header">
						<div className="logo flex items-center justify-center">
              <Image src="/images/hodl2buidl-logo.png" height={70} width={100} alt="" />
						</div>
						<div className="content">
							<div className="inner flex flex-col items-center">
								<h1 className="font-bold">Hodl 2 Buidl</h1>
								<p className="mt-3 w-8/12">Welcome to HODL 2 BUIDL, an implementation of 10x blockchain developers community with on-chain governance and optional build-to-earn model.</p>
							</div>
						</div>
						<nav>
							<ul>
								{/* <li><a href="#intro">Intro</a></li> */}
								{/* <li><a href="#work">Work</a></li> */}
								<li><a href="#about">About</a></li>
								<li><a href="#socials">Socials</a></li>
							</ul>
						</nav>
					</header>

					<div id="main">

							<article id="intro">
								<h2 className="major">Intro</h2>
								<span className="image main"><img src="images/pic01.jpg" alt="" /></span>
								<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
							</article>

							<article id="work">
								<h2 className="major">Work</h2>
								<span className="image main"><img src="images/pic02.jpg" alt="" /></span>
								<p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
								<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
							</article>

							<article id="about">
								<h2 className="major">About</h2>
								{/* <span className="image main"><img src="images/pic03.jpg" alt="" /></span> */}
                <p>HODL 2 BUIDL started as a community meet-up of blockchain developers in early March 2022. Although there was no advertising campaign, a lot of attention was quickly brought to it by crypto, de-fi enthusiasts who discovered the future advantages of the technology and shared their interest on social media.</p>
                <p className="my-3">In terms of development now we have a team of eleven hungry young blockchain and frontend developers passionate about web3 and DeFi that has bonded to us because of our passion for being on the edge of innovation for a decentralized future. </p>
                <p>Over time, the shared idea of furthering the development of HODL 2 BUIDL as a community-based project emerged. The H2B community hosts some of the finest developers and experts in the blockchain industry and De-Fi space. Who offered their skills and time to develop the their passionate ideas. Within a short period, the HODL 2 BUIDL DAO was created, giving members of DAO the ability to earn $BUIDL token for successful completion of the proposal. </p>
                <p className="my-3">From there, HODL 2 BUIDL governance token was seen as the next logical evolution. With so many getting excited to head into the community we had decided to take an action.</p>
							</article>

							<article id="socials" className="flex flex-col items-center">
								<h2 className="major text-center">Socials</h2>
								<ul className="icons">
									<li><a href="https://twitter.com/hodl2buidl" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
									{/* <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li> */}
									<li><a href="https://www.instagram.com/hodl2buidl" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
									<li><a href="https://github.com/HODL-2-BUIDL" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
								</ul>
							</article>

							<article id="elements">
								<h2 className="major">Elements</h2>

								<section>
									<h3 className="major">Text</h3>
									<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
									This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
									</p>
									<hr />
									<h2>Heading Level 2</h2>
									<h3>Heading Level 3</h3>
									<h4>Heading Level 4</h4>
									<h5>Heading Level 5</h5>
									<h6>Heading Level 6</h6>
									<hr />
									<h4>Blockquote</h4>
									<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
									<h4>Preformatted</h4>
								</section>

								<section>
									<h3 className="major">Lists</h3>

									<h4>Unordered</h4>
									<ul>
										<li>Dolor pulvinar etiam.</li>
										<li>Sagittis adipiscing.</li>
										<li>Felis enim feugiat.</li>
									</ul>

									<h4>Alternate</h4>
									<ul className="alt">
										<li>Dolor pulvinar etiam.</li>
										<li>Sagittis adipiscing.</li>
										<li>Felis enim feugiat.</li>
									</ul>

									<h4>Ordered</h4>
									<ol>
										<li>Dolor pulvinar etiam.</li>
										<li>Etiam vel felis viverra.</li>
										<li>Felis enim feugiat.</li>
										<li>Dolor pulvinar etiam.</li>
										<li>Etiam vel felis lorem.</li>
										<li>Felis enim et feugiat.</li>
									</ol>
									<h4>Icons</h4>
									<ul className="icons">
										<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
										<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
										<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
										<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
									</ul>

									<h4>Actions</h4>
									<ul className="actions">
										<li><a href="#" className="button primary">Default</a></li>
										<li><a href="#" className="button">Default</a></li>
									</ul>
									<ul className="actions stacked">
										<li><a href="#" className="button primary">Default</a></li>
										<li><a href="#" className="button">Default</a></li>
									</ul>
								</section>

								<section>
									<h3 className="major">Table</h3>
									<h4>Default</h4>
									<div className="table-wrapper">
										<table>
											<thead>
												<tr>
													<th>Name</th>
													<th>Description</th>
													<th>Price</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Item One</td>
													<td>Ante turpis integer aliquet porttitor.</td>
													<td>29.99</td>
												</tr>
												<tr>
													<td>Item Two</td>
													<td>Vis ac commodo adipiscing arcu aliquet.</td>
													<td>19.99</td>
												</tr>
												<tr>
													<td>Item Three</td>
													<td> Morbi faucibus arcu accumsan lorem.</td>
													<td>29.99</td>
												</tr>
												<tr>
													<td>Item Four</td>
													<td>Vitae integer tempus condimentum.</td>
													<td>19.99</td>
												</tr>
												<tr>
													<td>Item Five</td>
													<td>Ante turpis integer aliquet porttitor.</td>
													<td>29.99</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colSpan="2"></td>
													<td>100.00</td>
												</tr>
											</tfoot>
										</table>
									</div>

									<h4>Alternate</h4>
									<div className="table-wrapper">
										<table className="alt">
											<thead>
												<tr>
													<th>Name</th>
													<th>Description</th>
													<th>Price</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Item One</td>
													<td>Ante turpis integer aliquet porttitor.</td>
													<td>29.99</td>
												</tr>
												<tr>
													<td>Item Two</td>
													<td>Vis ac commodo adipiscing arcu aliquet.</td>
													<td>19.99</td>
												</tr>
												<tr>
													<td>Item Three</td>
													<td> Morbi faucibus arcu accumsan lorem.</td>
													<td>29.99</td>
												</tr>
												<tr>
													<td>Item Four</td>
													<td>Vitae integer tempus condimentum.</td>
													<td>19.99</td>
												</tr>
												<tr>
													<td>Item Five</td>
													<td>Ante turpis integer aliquet porttitor.</td>
													<td>29.99</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colSpan="2"></td>
													<td>100.00</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</section>

								<section>
									<h3 className="major">Buttons</h3>
									<ul className="actions">
										<li><a href="#" className="button primary">Primary</a></li>
										<li><a href="#" className="button">Default</a></li>
									</ul>
									<ul className="actions">
										<li><a href="#" className="button">Default</a></li>
										<li><a href="#" className="button small">Small</a></li>
									</ul>
									<ul className="actions">
										<li><a href="#" className="button primary icon solid fa-download">Icon</a></li>
										<li><a href="#" className="button icon solid fa-download">Icon</a></li>
									</ul>
									<ul className="actions">
										<li><span className="button primary disabled">Disabled</span></li>
										<li><span className="button disabled">Disabled</span></li>
									</ul>
								</section>

								<section>
									<h3 className="major">Form</h3>
									<form method="post" action="#">
										<div className="fields">
											<div className="field half">
												<label htmlFor="demo-name">Name</label>
												<input type="text" name="demo-name" id="demo-name" placeholder="Jane Doe" />
											</div>
											<div className="field half">
												<label htmlFor="demo-email">Email</label>
												<input type="email" name="demo-email" id="demo-email" placeholder="jane@untitled.tld" />
											</div>
											<div className="field">
												<label htmlFor="demo-category">Category</label>
												<select name="demo-category" id="demo-category">
													<option value="">-</option>
													<option value="1">Manufacturing</option>
													<option value="1">Shipping</option>
													<option value="1">Administration</option>
													<option value="1">Human Resources</option>
												</select>
											</div>
											<div className="field half">
												<input type="radio" id="demo-priority-low" name="demo-priority" />
												<label htmlFor="demo-priority-low">Low</label>
											</div>
											<div className="field half">
												<input type="radio" id="demo-priority-high" name="demo-priority" />
												<label htmlFor="demo-priority-high">High</label>
											</div>
											<div className="field half">
												<input type="checkbox" id="demo-copy" name="demo-copy" />
												<label htmlFor="demo-copy">Email me a copy</label>
											</div>
											<div className="field half">
												<input type="checkbox" id="demo-human" name="demo-human" />
												<label htmlFor="demo-human">Not a robot</label>
											</div>
											<div className="field">
												<label htmlFor="demo-message">Message</label>
												<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
											</div>
										</div>
										<ul className="actions">
											<li><input type="submit" value={"Send Message"} className="primary" /></li>
											<li><input type="reset" value={"Reset"} /></li>
										</ul>
									</form>
								</section>

							</article>

					</div>

					<footer id="footer">
						<p className="copyright">&copy; Copyright 2022 HODL 2 BUIDL - All rights reserved.</p>
					</footer>

			</div>

			<div id="bg"></div>

      <Script src="js/util.js"></Script>
    </>
  )
}






function jqueryInitialCode() {
  var $window = $(window), $body = $('body'), $wrapper = $('#wrapper'), $header = $('#header'), $footer = $('#footer'), $main = $('#main'), $main_articles = $main.children('article');

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['361px', '480px'],
    xxsmall: [null, '360px']
  });

  // Play initial animations on page load.
  window.setTimeout(function () {
    $body.removeClass('is-preload');
  }, 100);

  // Fix: Flexbox min-height bug on IE.
  if (browser.name == 'ie') {

    var flexboxFixTimeoutId;

    $window.on('resize.flexbox-fix', function () {

      clearTimeout(flexboxFixTimeoutId);

      flexboxFixTimeoutId = setTimeout(function () {

        if ($wrapper.prop('scrollHeight') > $window.height())
          $wrapper.css('height', 'auto');

        else
          $wrapper.css('height', '100vh');

      }, 250);

    }).triggerHandler('resize.flexbox-fix');

  }

  // Nav.
  var $nav = $header.children('nav'), $nav_li = $nav.find('li');

  // Add "middle" alignment classes if we're dealing with an even number of items.
  if ($nav_li.length % 2 == 0) {

    $nav.addClass('use-middle');
    $nav_li.eq(($nav_li.length / 2)).addClass('is-middle');

  }

  // Main.
  var delay = 325, locked = false;

  // Methods.
  $main._show = function (id, initial) {

    var $article = $main_articles.filter('#' + id);

    // No such article? Bail.
    if ($article.length == 0)
      return;

    // Handle lock.
    // Already locked? Speed through "show" steps w/o delays.
    if (locked || (typeof initial != 'undefined' && initial === true)) {

      // Mark as switching.
      $body.addClass('is-switching');

      // Mark as visible.
      $body.addClass('is-article-visible');

      // Deactivate all articles (just in case one's already active).
      $main_articles.removeClass('active');

      // Hide header, footer.
      $header.hide();
      $footer.hide();

      // Show main, article.
      $main.show();
      $article.show();

      // Activate article.
      $article.addClass('active');

      // Unlock.
      locked = false;

      // Unmark as switching.
      setTimeout(function () {
        $body.removeClass('is-switching');
      }, (initial ? 1000 : 0));

      return;

    }

    // Lock.
    locked = true;

    // Article already visible? Just swap articles.
    if ($body.hasClass('is-article-visible')) {

      // Deactivate current article.
      var $currentArticle = $main_articles.filter('.active');

      $currentArticle.removeClass('active');

      // Show article.
      setTimeout(function () {

        // Hide current article.
        $currentArticle.hide();

        // Show article.
        $article.show();

        // Activate article.
        setTimeout(function () {

          $article.addClass('active');

          // Window stuff.
          $window
            .scrollTop(0)
            .triggerHandler('resize.flexbox-fix');

          // Unlock.
          setTimeout(function () {
            locked = false;
          }, delay);

        }, 25);

      }, delay);

    }


    // Otherwise, handle as normal.
    else {

      // Mark as visible.
      $body
        .addClass('is-article-visible');

      // Show article.
      setTimeout(function () {

        // Hide header, footer.
        $header.hide();
        $footer.hide();

        // Show main, article.
        $main.show();
        $article.show();

        // Activate article.
        setTimeout(function () {

          $article.addClass('active');

          // Window stuff.
          $window
            .scrollTop(0)
            .triggerHandler('resize.flexbox-fix');

          // Unlock.
          setTimeout(function () {
            locked = false;
          }, delay);

        }, 25);

      }, delay);

    }

  };

  $main._hide = function (addState) {

    var $article = $main_articles.filter('.active');

    // Article not visible? Bail.
    if (!$body.hasClass('is-article-visible'))
      return;

    // Add state?
    if (typeof addState != 'undefined'
      && addState === true)
      history.pushState(null, null, '#');

    // Handle lock.
    // Already locked? Speed through "hide" steps w/o delays.
    if (locked) {

      // Mark as switching.
      $body.addClass('is-switching');

      // Deactivate article.
      $article.removeClass('active');

      // Hide article, main.
      $article.hide();
      $main.hide();

      // Show footer, header.
      $footer.show();
      $header.show();

      // Unmark as visible.
      $body.removeClass('is-article-visible');

      // Unlock.
      locked = false;

      // Unmark as switching.
      $body.removeClass('is-switching');

      // Window stuff.
      $window
        .scrollTop(0)
        .triggerHandler('resize.flexbox-fix');

      return;

    }

    // Lock.
    locked = true;

    // Deactivate article.
    $article.removeClass('active');

    // Hide article.
    setTimeout(function () {

      // Hide article, main.
      $article.hide();
      $main.hide();

      // Show footer, header.
      $footer.show();
      $header.show();

      // Unmark as visible.
      setTimeout(function () {

        $body.removeClass('is-article-visible');

        // Window stuff.
        $window
          .scrollTop(0)
          .triggerHandler('resize.flexbox-fix');

        // Unlock.
        setTimeout(function () {
          locked = false;
        }, delay);

      }, 25);

    }, delay);


  };

  // Articles.
  $main_articles.each(function () {

    var $this = $(this);

    // Close.
    $('<div class="close">Close</div>')
      .appendTo($this)
      .on('click', function () {
        location.hash = '';
      });

    // Prevent clicks from inside article from bubbling.
    $this.on('click', function (event) {
      event.stopPropagation();
    });

  });

  // Events.
  $body.on('click', function (event) {

    // Article visible? Hide.
    if ($body.hasClass('is-article-visible'))
      $main._hide(true);

  });

  $window.on('keyup', function (event) {

    switch (event.keyCode) {

      case 27:

        // Article visible? Hide.
        if ($body.hasClass('is-article-visible'))
          $main._hide(true);

        break;

      default:
        break;

    }

  });

  $window.on('hashchange', function (event) {

    // Empty hash?
    if (location.hash == ''
      || location.hash == '#') {

      // Prevent default.
      event.preventDefault();
      event.stopPropagation();

      // Hide.
      $main._hide();

    }


    // Otherwise, check for a matching article.
    else if ($main_articles.filter(location.hash).length > 0) {

      // Prevent default.
      event.preventDefault();
      event.stopPropagation();

      // Show article.
      $main._show(location.hash.substr(1));

    }

  });

  // Scroll restoration.
  // This prevents the page from scrolling back to the top on a hashchange.
  if ('scrollRestoration' in history)
    history.scrollRestoration = 'manual';
  else {

    var oldScrollPos = 0, scrollPos = 0, $htmlbody = $('html,body');

    $window
      .on('scroll', function () {

        oldScrollPos = scrollPos;
        scrollPos = $htmlbody.scrollTop();

      })
      .on('hashchange', function () {
        $window.scrollTop(oldScrollPos);
      });

  }

  // Initialize.
  // Hide main, articles.
  $main.hide();
  $main_articles.hide();

  // Initial article.
  if (location.hash != ''
    && location.hash != '#')
    $window.on('load', function () {
      $main._show(location.hash.substr(1), true);
    });
}

