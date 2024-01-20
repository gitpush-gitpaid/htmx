import { htmxTutorials } from '../info/tutorials.js';

function createContainerStructure() {
  const outerDiv = document.createElement('div');
  outerDiv.className = 'w-full max-w-[560px] mx-auto mb-10';
  outerDiv.style.minWidth = '400px';

  const innerDiv = document.createElement('div');
  innerDiv.className = 'relative';
  return { outerDiv, innerDiv };
}

function displayTutorials(tutorials) {
  const container = document.getElementById('tutorial-container');
  const youtubeBaseUrl = 'https://www.youtube.com/embed/';

  tutorials.forEach((tutorial) => {
    const { outerDiv, innerDiv } = createContainerStructure();
    let contentElement;

    const twitterHandleLink = document.createElement('a');
    twitterHandleLink.href = `https://twitter.com/${tutorial.twitterHandle}`;
    twitterHandleLink.textContent = `@${tutorial.twitterHandle}`;
    twitterHandleLink.className = 'block text-left my-2';
    outerDiv.insertBefore(twitterHandleLink, outerDiv.firstChild);

    switch (tutorial.type) {
      case 'tweet':
        contentElement = document.createElement('blockquote');
        contentElement.classList.add('twitter-tweet');
        const anchor = document.createElement('a');
        anchor.href = tutorial.content;
        contentElement.appendChild(anchor);
        innerDiv.style.paddingTop = '0';
        break;
      case 'youtube':
        contentElement = document.createElement('iframe');
        contentElement.src = youtubeBaseUrl + tutorial.content;
        contentElement.title = 'YouTube video player';
        contentElement.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        contentElement.allowFullscreen = true;
        contentElement.className = 'absolute top-0 left-0 w-full h-full';
        innerDiv.style.paddingTop = '56.25%';
        break;
    }

    if (contentElement) {
      innerDiv.appendChild(contentElement);
      outerDiv.appendChild(innerDiv);
      container.appendChild(outerDiv);
    }

    if (tutorial.type === 'tweet') {
      twttr.widgets.load();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayTutorials(htmxTutorials);
});
