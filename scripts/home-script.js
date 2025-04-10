max_slit_items = 5;


function createHomeSectionBoardGamesItem(item, n) {
    const sectionItem = document.createElement('div');
    sectionItem.classList.add('home-section-item', 'item');
    sectionItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="home-section-item-text">
            <div class="home-section-item-title item-title">${n} - ${item.title}</div>
            <div class="home-section-item-description item-description">${item.description}</div>
        </div>
    `;
    return sectionItem;
}

function createHomeSectionCrowdfundingItem(item, n) {
    const sectionItem = document.createElement('div');
    sectionItem.classList.add('home-section-item', 'item');
    sectionItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="home-section-item-text">
            <div class="home-section-item-title item-title">${n} - ${item.title}</div>
            <div class="home-section-item-info">Ends ${item.expires}</div>
            <div class="home-section-item-description item-description">${item.description}</div>
            <a href="${item.link}" class="home-section-item-outer-link">Visit Project</a>
        </div>
    `;
    return sectionItem;
}

function createHomeSectionVideoItem(item, n) {
    const sectionItem = document.createElement('div');
    sectionItem.classList.add('home-section-item', 'item');
    sectionItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="home-section-item-text">
            <div class="home-section-item-title item-title">${n} - ${item.title}</div>
            <div class="home-section-item-info">${item.info}</div>
        </div>
    `;
    return sectionItem;
}

function createHomeSectionGivewayItem(item, n) {
    const sectionItem = document.createElement('div');
    sectionItem.classList.add('home-section-item', 'item');
    sectionItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="home-section-item-text">
            <div class="home-section-item-title item-title">${n} - ${item.title}</div>
            <div class="home-section-item-info">${item.publisher} - Ends ${item.expires}</div>
        </div>
    `;
    return sectionItem;
}

function createHomeSectionDeepReviewssItem(item, n) {
    const sectionItem = document.createElement('div');
    sectionItem.classList.add('home-section-item', 'item');
    sectionItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="home-section-item-text">
            <div class="home-section-item-title item-title">${n} - ${item.title}</div>
            <div class="home-section-item-author item-author">by&nbsp;<a href="#">${item.author}</a>
                <div class="home-likeComments-icons">
                    <i class="fa-regular fa-thumbs-up home-likeComments-icon"></i><div class="home-split-number">${item.n_likes}</div>
                    <i class="fa-regular fa-message home-likeComments-icon"></i><div class="home-split-number">${item.n_comments}<</div>
                </div>
            </div>
        </div>
    `;
    return sectionItem;
}

function createHomeSectionGeeklistsItem(item, n) {
    const sectionItem = document.createElement('div');
    sectionItem.classList.add('home-section-item', 'item');
    sectionItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="home-section-item-text">
            <div class="home-section-item-title item-title">${n} - ${item.title}</div>
            <div class="home-section-item-author item-author">by&nbsp;<a href="#">${item.author}</a>
                <div class="home-likeComments-icons">
                    <i class="fa-regular fa-thumbs-up home-likeComments-icon"></i><div class="home-split-number">${item.n_likes}</div>
                    <i class="fa-regular fa-message home-likeComments-icon"></i><div class="home-split-number">${item.n_comments}<</div>
                </div>
            </div>
        </div>
    `;
    return sectionItem;
}

function createHomeSectionHotVideosItem(item, n) {
    const sectionItem = document.createElement('div');
    sectionItem.classList.add('home-section-item', 'item');
    sectionItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="home-section-item-text">
            <div class="home-section-item-title item-title">${n} - ${item.title}</div>
            <div class="home-section-item-author item-author">by&nbsp;<a href="#">${item.author}</a>
                <div class="home-likeComments-icons">
                    <i class="fa-regular fa-thumbs-up home-likeComments-icon"></i><div class="home-split-number">${item.n_likes}</div>
                    <i class="fa-regular fa-message home-likeComments-icon"></i><div class="home-split-number">${item.n_comments}<</div>
                </div>
            </div>
        </div>
    `;
    return sectionItem;
}

function createHomeSplitItem(item) {
    const splitItem = document.createElement('div');
    splitItem.classList.add('home-split-item', 'item');
    splitItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="home-split-item-text">
            <div class="home-split-item-title item-title">${item.title}</div>
            <div class="home-split-item-author item-author">by&nbsp;<a href="#">${item.author}</a>
                <div class="home-likeComments-icons">
                    <i class="fa-regular fa-thumbs-up home-likeComments-icon"></i><div class="home-split-number">${item.n_likes}</div>
                    <i class="fa-regular fa-message home-likeComments-icon"></i><div class="home-split-number">${item.n_comments}</div>
                </div>
            </div>
        </div>
    `;
    
    return splitItem;
}

const hotnessContent = document.querySelector('#hot-section > .home-section-content');
const crowdfundingContent = document.querySelector('#crowdfunding-section > .home-section-content');
const videoContent = document.querySelector('#videos-section > .home-section-content');
const bestsellerContent = document.querySelector('#bestseller-section > .home-section-content');
const givewayContent = document.querySelector('#giveway-section > .home-section-content');
const mostPlayedContent = document.querySelector('#mostPlayed-section > .home-section-content');
const deepReviewsContent = document.querySelector('#deepReviews-section > .home-section-content');
const geeklistContent = document.querySelector('#geeklist-section > .home-section-content');
const hotVideosContent = document.querySelector('#hotVideos-section > .home-section-content');

const bgNewsContent = document.querySelector('#home-news-split > .home-split-content');
const discussionContent = document.querySelector('#home-discussion-split > .home-split-content');


for (let i=0; i < homeSectionItems.boardGames.length; i++) {
    const item = homeSectionItems.boardGames[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionBoardGamesItem(item, i + 1);
    hotnessContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.crowdfunding.length; i++) {
    const item = homeSectionItems.crowdfunding[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionCrowdfundingItem(item, i + 1);
    crowdfundingContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.videos.length; i++) {
    const item = homeSectionItems.videos[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionVideoItem(item, i + 1);
    videoContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.bestseller.length; i++) {
    const item = homeSectionItems.bestseller[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionBoardGamesItem(item, i + 1);
    bestsellerContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.giveway.length; i++) {
    const item = homeSectionItems.giveway[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionGivewayItem(item, i + 1);
    givewayContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.mostPlayed.length; i++) {
    const item = homeSectionItems.mostPlayed[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionBoardGamesItem(item, i + 1);
    mostPlayedContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.deepReviews.length; i++) {
    const item = homeSectionItems.deepReviews[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionDeepReviewssItem(item, i + 1);
    deepReviewsContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.geeklist.length; i++) {
    const item = homeSectionItems.geeklist[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionGeeklistsItem(item, i + 1);
    geeklistContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.hotVideos.length; i++) {
    const item = homeSectionItems.hotVideos[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionHotVideosItem(item, i + 1);
    hotVideosContent.appendChild(sectionItem);
}


for (let i=0; i < homeSplitItems.boardGameNews.length; i++) {
    const item = homeSplitItems.boardGameNews[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSplitItem(item);
    bgNewsContent.appendChild(sectionItem);

    if (i + 1 < max_slit_items) {
        const hrItem = document.createElement('hr');
        hrItem.classList.add('home-split-item-hr');
        bgNewsContent.appendChild(hrItem);
    }
}

for (let i=0; i < homeSplitItems.hotDiscussion.length; i++) {
    const item = homeSplitItems.hotDiscussion[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSplitItem(item);
    discussionContent.appendChild(sectionItem);

    if (i + 1 < max_slit_items) {
        const hrItem = document.createElement('hr');
        hrItem.classList.add('home-split-item-hr');
        discussionContent.appendChild(hrItem);
    }
}