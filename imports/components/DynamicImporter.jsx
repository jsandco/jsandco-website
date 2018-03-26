import Loadable from "loadable-components";
import React from "react"

import LoadingComponent       from "/imports/components/LoadingComponent"

const DynamicImporter = func => Loadable(func);

export default DynamicImporter
