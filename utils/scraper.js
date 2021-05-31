const puppeteer = require('puppeteer');
const browser = puppeteer.launch();
const scrapeIndex = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.index.hr/najnovije?kategorija=3')
  
    const scrapedData = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          `body > div.main-timeline > div > div.flex > div.left-part > div.tab-content > div > div > .latest > .clearfix` 
        )
      )
        .map(link => ({
          title: link.querySelector(`div.title-box > a.vijesti-text-hover.scale-img-hover.flex > div.content > h3`).textContent,
          link: link.querySelector('div.title-box > a.vijesti-text-hover.scale-img-hover.flex').getAttribute('href'),
          img:link.querySelector('div.title-box > a.vijesti-text-hover.scale-img-hover.flex > div.flex-holder > div > img').getAttribute('src')
        }))
    )
  
    await browser.close()
    return scrapedData
  }
// Left Sidebar Scrapper
const scrapeLeftSidebar = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.index.hr/')

  const scrapedData = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        `body > div.main-container.homepage.main-content-bg`   
      )
    )
      .map(link => ({
        
        title: link.querySelector(`div:nth-child(9) > div.cube-big-holder.media-1024 > div.cube-big-top-part > div > div.scale-img-hover > a > h2`).textContent,
        link: link.querySelector('div:nth-child(9) > div.cube-big-holder.media-1024 > div.cube-big-top-part > div > div.scale-img-hover > a').getAttribute('href'),
        img:link.querySelector('div:nth-child(9) > div.cube-big-holder.media-1024 > div.cube-big-top-part > div > div.scale-img-hover > a > div.img-holder > img').getAttribute('src'),
        summary:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.left-part > div.first-news > div.summary').textContent,
        
        //vezane vijesti
        connectedNewsOne:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.left-part > div.home-related-holder > ul > li:nth-child(1) > a > h3').textContent,
        connectedNewsTwo:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.left-part > div.home-related-holder > ul > li:nth-child(2) > a > h3').textContent,
        connectedNewsThree:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.left-part > div.home-related-holder > ul > li:nth-child(3) > a > h3').textContent,
        //center-news
        

        mainTopLink:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.second-news-holder > a').getAttribute('href'),
        mainTopTitle:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.second-news-holder > a > h2').textContent,
        mainTopImg:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.second-news-holder > a > div.img-holder > img').getAttribute('data-echo'),

        //center-news-inner
        mainBottomTitleOne:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(1) > a > div.title-holder > h3').textContent,
        mainBottomLinkOne:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(1) > a ').getAttribute('href'),
        mainBottomImgOne:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(1) > a > div.flex-holder > div > img').getAttribute('data-echo'),
        
        mainBottomTitleTwo:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(2) > a > div.title-holder > h3').textContent,
        mainBottomLinkTwo:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(2) > a ').getAttribute('href'),
        mainBottomImgTwo:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(2) > a > div.flex-holder > div > img').getAttribute('data-echo'),


        mainBottomTitleThree:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(3) > a > div.title-holder > h3').textContent,
        mainBottomLinkThree:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(3) > a ').getAttribute('href'),
        mainBottomImgThree:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(3) > a > div.flex-holder > div > img').getAttribute('data-echo'),

        mainBottomTitleFour:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(4) > a > div.title-holder > h3').textContent,
        mainBottomLinkFour:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(4) > a ').getAttribute('href'),
        mainBottomImgFour:link.querySelector('div:nth-child(9) > div.main-category-holder > div.top-box-holder.flex > div.right-part > div.other-news-holder > ul > li:nth-child(4) > a > div.flex-holder > div > img').getAttribute('data-echo'),
        


      })
      )
  )

  await browser.close()
  return scrapedData
}



 
module.exports = {
    scrapeIndex, 
    scrapeLeftSidebar
};