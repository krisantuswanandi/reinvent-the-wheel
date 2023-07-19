function createElement(tagName = "", attributes = {}, children = []) {
    return {
        tagName,
        attributes,
        children,
    }
}

function createRoot(rootNode) {
    return {
        render(element) {
            const text = document.createTextNode("Hello Vdom KW!!!")
            rootNode.append(text)
        }
    }
}

const app = createElement("div", {}, "Hello Vdom KW!!!")

const root = createRoot(document.getElementById("app"))
root.render(app)
