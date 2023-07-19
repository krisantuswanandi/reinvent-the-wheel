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
    
    app.children.forEach(child => {
        const childElement = renderDOM(child)
        element.append(childElement)
    })

    return element
}

const app = createElement("div", {}, ["Hello Vdom KW!!!"])

const root = createRoot(document.getElementById("app"))
root.render(app)
