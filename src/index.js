function createElement(tagName = "", attributes = {}, children = []) {
    return {
        tagName,
        attributes,
        children,
    }
}

function createRoot(rootNode) {
    return {
        render(app) {
            const appDOM = renderDOM(app)
            rootNode.append(appDOM)
        }
    }
}

function renderDOM(app) {
    if (typeof app === "string") {
        return document.createTextNode(app)
    }

    const element = document.createElement(app.tagName)

    Object.keys(app.attributes).forEach(key => {
        element.setAttribute(key, app.attributes[key])
    })
    
    app.children.forEach(child => {
        const childElement = renderDOM(child)
        element.append(childElement)
    })

    return element
}

const app = createElement(
    "div",
    { style: "color: red; font-family: sans-serif" },
    [
        createElement("div", { style: "margin-bottom: 8px" }, ["Hello Vdom KW!!!"]),
        createElement("img", { src: "https://cataas.com/cat", width: 200 }),
    ],
)

const root = createRoot(document.getElementById("app"))
root.render(app)
