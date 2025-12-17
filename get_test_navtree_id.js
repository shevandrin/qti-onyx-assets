    function findNavTreeId(rootDoc) {
        if (!rootDoc) return null;
        var nav = rootDoc.querySelector("nav.navtree");
        if (nav)
            if (nav.id) return nav.id;

        var iframes = rootDoc.querySelectorAll("iframe");
        for (var frame of iframes) {
            try {
                var childDoc = frame.contentDocument || frame.contentWindow?.document;
                var found = findNavTreeId(childDoc);
                if (found) return found;
            } catch (e) {
                // Cross-origin iframe; skip
            }
        }
        return null;
    }