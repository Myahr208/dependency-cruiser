/* generated - don't edit */export default {"title":"dependency-cruiser configuration","$schema":"http://json-schema.org/draft-07/schema#","$id":"https://dependency-cruiser.js.org/schema/configuration.schema.json","type":"object","additionalProperties":false,"properties":{"$schema":{"type":"string"},"forbidden":{"type":"array","items":{"$ref":"#/definitions/ForbiddenRuleType"}},"allowed":{"type":"array","items":{"$ref":"#/definitions/AllowedRuleType"}},"allowedSeverity":{"$ref":"#/definitions/SeverityType"},"required":{"type":"array","items":{"$ref":"#/definitions/RequiredRuleType"}},"options":{"$ref":"#/definitions/OptionsType"},"extends":{"$ref":"#/definitions/ExtendsType"}},"definitions":{"RuleSetType":{"type":"object","additionalProperties":false,"properties":{"forbidden":{"type":"array","items":{"$ref":"#/definitions/ForbiddenRuleType"}},"allowed":{"type":"array","items":{"$ref":"#/definitions/AllowedRuleType"}},"allowedSeverity":{"$ref":"#/definitions/SeverityType"},"required":{"type":"array","items":{"$ref":"#/definitions/RequiredRuleType"}}}},"AllowedRuleType":{"oneOf":[{"$ref":"#/definitions/RegularAllowedRuleType"},{"$ref":"#/definitions/ReachabilityAllowedRuleType"}]},"RegularAllowedRuleType":{"type":"object","required":["from","to"],"additionalProperties":false,"properties":{"comment":{"type":"string"},"scope":{"type":"string","enum":["module","folder"]},"from":{"$ref":"#/definitions/FromRestrictionType"},"to":{"$ref":"#/definitions/ToRestrictionType"}}},"ReachabilityAllowedRuleType":{"type":"object","required":["from","to"],"additionalProperties":false,"properties":{"comment":{"type":"string"},"scope":{"type":"string","enum":["module","folder"]},"from":{"$ref":"#/definitions/ReachabilityFromRestrictionType"},"to":{"$ref":"#/definitions/ReachabilityToRestrictionType"}}},"ForbiddenRuleType":{"oneOf":[{"$ref":"#/definitions/RegularForbiddenRuleType"},{"$ref":"#/definitions/ReachabilityForbiddenRuleType"},{"$ref":"#/definitions/DependentsForbiddenRuleType"}]},"RegularForbiddenRuleType":{"type":"object","required":["from","to"],"additionalProperties":false,"properties":{"name":{"type":"string"},"severity":{"$ref":"#/definitions/SeverityType"},"scope":{"type":"string","enum":["module","folder"]},"comment":{"type":"string"},"from":{"$ref":"#/definitions/FromRestrictionType"},"to":{"$ref":"#/definitions/ToRestrictionType"}}},"DependentsForbiddenRuleType":{"type":"object","required":["module","from"],"additionalProperties":false,"properties":{"name":{"type":"string"},"severity":{"$ref":"#/definitions/SeverityType"},"scope":{"type":"string","enum":["module","folder"]},"comment":{"type":"string"},"module":{"$ref":"#/definitions/DependentsModuleRestrictionType"},"from":{"$ref":"#/definitions/DependentsFromRestrictionType"}}},"ReachabilityForbiddenRuleType":{"type":"object","required":["from","to"],"additionalProperties":false,"properties":{"name":{"type":"string"},"severity":{"$ref":"#/definitions/SeverityType"},"scope":{"type":"string","enum":["module","folder"]},"comment":{"type":"string"},"from":{"$ref":"#/definitions/ReachabilityFromRestrictionType"},"to":{"$ref":"#/definitions/ReachabilityToRestrictionType"}}},"RequiredRuleType":{"type":"object","required":["module","to"],"additionalProperties":false,"properties":{"name":{"type":"string"},"severity":{"$ref":"#/definitions/SeverityType"},"scope":{"type":"string","enum":["module","folder"]},"comment":{"type":"string"},"module":{"$ref":"#/definitions/RequiredModuleRestrictionType"},"to":{"$ref":"#/definitions/RequiredToRestrictionType"}}},"FromRestrictionType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"pathNot":{"$ref":"#/definitions/REAsStringsType"},"orphan":{"type":"boolean"}}},"ReachabilityFromRestrictionType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"pathNot":{"$ref":"#/definitions/REAsStringsType"}}},"ToRestrictionType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"pathNot":{"$ref":"#/definitions/REAsStringsType"},"couldNotResolve":{"type":"boolean"},"circular":{"type":"boolean"},"dynamic":{"type":"boolean"},"exoticallyRequired":{"type":"boolean"},"exoticRequire":{"$ref":"#/definitions/REAsStringsType"},"exoticRequireNot":{"$ref":"#/definitions/REAsStringsType"},"preCompilationOnly":{"type":"boolean"},"dependencyTypes":{"type":"array","items":{"$ref":"#/definitions/DependencyTypeType"}},"dependencyTypesNot":{"type":"array","items":{"$ref":"#/definitions/DependencyTypeType"}},"moreThanOneDependencyType":{"type":"boolean"},"license":{"$ref":"#/definitions/REAsStringsType"},"licenseNot":{"$ref":"#/definitions/REAsStringsType"},"via":{"$ref":"#/definitions/REAsStringsType"},"viaOnly":{"$ref":"#/definitions/REAsStringsType"},"viaNot":{"$ref":"#/definitions/REAsStringsType"},"viaSomeNot":{"$ref":"#/definitions/REAsStringsType"},"moreUnstable":{"type":"boolean"}}},"DependentsModuleRestrictionType":{"required":[],"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"pathNot":{"$ref":"#/definitions/REAsStringsType"},"numberOfDependentsLessThan":{"type":"integer","minimum":0,"maximum":100},"numberOfDependentsMoreThan":{"type":"integer","minimum":0,"maximum":100}}},"DependentsFromRestrictionType":{"required":[],"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"pathNot":{"$ref":"#/definitions/REAsStringsType"}}},"ReachabilityToRestrictionType":{"required":["reachable"],"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"pathNot":{"$ref":"#/definitions/REAsStringsType"},"reachable":{"type":"boolean"}}},"RequiredModuleRestrictionType":{"required":[],"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"pathNot":{"$ref":"#/definitions/REAsStringsType"}}},"RequiredToRestrictionType":{"required":[],"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"}}},"DependencyTypeType":{"type":"string","enum":["aliased-subpath-import","aliased-tsconfig-base-url","aliased-tsconfig-paths","aliased-tsconfig","aliased-webpack","aliased-workspace","aliased","amd-define","amd-require","amd-exotic-require","core","deprecated","dynamic-import","exotic-require","export","import-equals","import","local","localmodule","npm-bundled","npm-dev","npm-no-pkg","npm-optional","npm-peer","npm-unknown","npm","require","triple-slash-amd-dependency","triple-slash-directive","triple-slash-file-reference","triple-slash-type-reference","type-import","type-only","undetermined","unknown"]},"REAsStringsType":{"oneOf":[{"type":"string"},{"type":"array","items":{"type":"string"}}]},"SeverityType":{"type":"string","enum":["error","warn","info","ignore"]},"OptionsType":{"type":"object","additionalProperties":false,"properties":{"doNotFollow":{"oneOf":[{"$ref":"#/definitions/REAsStringsType"},{"$ref":"#/definitions/CompoundDoNotFollowType"}]},"exclude":{"oneOf":[{"$ref":"#/definitions/REAsStringsType"},{"$ref":"#/definitions/CompoundExcludeType"}]},"includeOnly":{"oneOf":[{"$ref":"#/definitions/REAsStringsType"},{"$ref":"#/definitions/CompoundIncludeOnlyType"}]},"focus":{"oneOf":[{"$ref":"#/definitions/REAsStringsType"},{"$ref":"#/definitions/CompoundFocusType"}]},"reaches":{"oneOf":[{"$ref":"#/definitions/REAsStringsType"},{"$ref":"#/definitions/CompoundReachesType"}]},"highlight":{"oneOf":[{"$ref":"#/definitions/REAsStringsType"},{"$ref":"#/definitions/CompoundHighlightType"}]},"knownViolations":{"$ref":"#/definitions/ViolationsType"},"collapse":{"oneOf":[{"type":"string"},{"type":"integer","minimum":1,"maximum":9}]},"maxDepth":{"type":"integer","minimum":0,"maximum":99},"moduleSystems":{"$ref":"#/definitions/ModuleSystemsType"},"prefix":{"type":"string"},"preserveSymlinks":{"type":"boolean"},"combinedDependencies":{"type":"boolean"},"tsConfig":{"type":"object","additionalProperties":false,"properties":{"fileName":{"type":"string"}}},"tsPreCompilationDeps":{"oneOf":[{"type":"boolean"},{"type":"string","enum":["specify"]}]},"extraExtensionsToScan":{"type":"array","items":{"type":"string"}},"externalModuleResolutionStrategy":{"type":"string","enum":["node_modules","yarn-pnp"]},"builtInModules":{"type":"object","additionalProperties":false,"properties":{"override":{"type":"array","items":{"type":"string"}},"add":{"type":"array","items":{"type":"string"}}}},"forceDeriveDependents":{"type":"boolean"},"webpackConfig":{"type":"object","additionalProperties":false,"properties":{"fileName":{"type":"string"},"env":{"oneOf":[{"type":"object"},{"type":"string"}]},"arguments":{"type":"object"}}},"enhancedResolveOptions":{"type":"object","additionalProperties":false,"properties":{"exportsFields":{"type":"array","items":{"type":"string"}},"conditionNames":{"type":"array","items":{"type":"string"}},"extensions":{"type":"array","items":{"type":"string"}},"mainFields":{"type":"array","items":{"type":"string"}},"mainFiles":{"type":"array"},"aliasFields":{"type":"array","items":{"type":"string"}},"cachedInputFileSystem":{"type":"object","additionalProperties":false,"properties":{"cacheDuration":{"type":"integer","minimum":0,"maximum":1800000}}}}},"babelConfig":{"type":"object","additionalProperties":false,"properties":{"fileName":{"type":"string"}}},"parser":{"type":"string","enum":["acorn","swc","tsc"]},"exoticRequireStrings":{"type":"array","items":{"type":"string"}},"reporterOptions":{"$ref":"#/definitions/ReporterOptionsType"},"progress":{"type":"object","additionalProperties":false,"properties":{"type":{"type":"string","enum":["cli-feedback","performance-log","ndjson","none"]},"maximumLevel":{"type":"number","enum":[-1,40,50,60,70,80,99]}}},"metrics":{"type":"boolean"},"baseDir":{"type":"string"},"cache":{"oneOf":[{"type":"boolean"},{"type":"string"},{"$ref":"#/definitions/CacheOptionsType"}]}}},"ModuleSystemType":{"type":"string","enum":["cjs","es6","amd","tsd"]},"ModuleSystemsType":{"type":"array","items":{"$ref":"#/definitions/ModuleSystemType"}},"CompoundExcludeType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"dynamic":{"type":"boolean"}}},"CompoundDoNotFollowType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"dependencyTypes":{"type":"array","items":{"$ref":"#/definitions/DependencyTypeType"}}}},"CompoundIncludeOnlyType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"}}},"CompoundFocusType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"},"depth":{"type":"number","minimum":1,"maximum":4}}},"CompoundReachesType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"}}},"CompoundHighlightType":{"type":"object","additionalProperties":false,"properties":{"path":{"$ref":"#/definitions/REAsStringsType"}}},"ReporterOptionsType":{"type":"object","additionalProperties":false,"properties":{"anon":{"$ref":"#/definitions/AnonReporterOptionsType"},"archi":{"$ref":"#/definitions/DotReporterOptionsType"},"dot":{"$ref":"#/definitions/DotReporterOptionsType"},"ddot":{"$ref":"#/definitions/DotReporterOptionsType"},"flat":{"$ref":"#/definitions/DotReporterOptionsType"},"markdown":{"$ref":"#/definitions/MarkdownReporterOptionsType"},"metrics":{"$ref":"#/definitions/MetricsReporterOptionsType"},"mermaid":{"$ref":"#/definitions/MermaidReporterOptionsType"},"text":{"$ref":"#/definitions/TextReporterOptionsType"}}},"AnonReporterOptionsType":{"type":"object","additionalProperties":false,"properties":{"wordlist":{"type":"array","items":{"type":"string"}}}},"MetricsReporterOptionsType":{"type":"object","additionalProperties":false,"properties":{"orderBy":{"type":"string","enum":["instability","moduleCount","afferentCouplings","efferentCouplings","name"]},"hideModules":{"type":"boolean"},"hideFolders":{"type":"boolean"}}},"MarkdownReporterOptionsType":{"type":"object","additionalProperties":false,"properties":{"showTitle":{"type":"boolean"},"title":{"type":"string"},"showSummary":{"type":"boolean"},"showSummaryHeader":{"type":"boolean"},"summaryHeader":{"type":"string"},"showStatsSummary":{"type":"boolean"},"showRulesSummary":{"type":"boolean"},"includeIgnoredInSummary":{"type":"boolean"},"showDetails":{"type":"boolean"},"includeIgnoredInDetails":{"type":"boolean"},"showDetailsHeader":{"type":"boolean"},"detailsHeader":{"type":"string"},"collapseDetails":{"type":"boolean"},"collapsedMessage":{"type":"string"},"noViolationsMessage":{"type":"string"},"showFooter":{"type":"boolean"}}},"MermaidReporterOptionsType":{"type":"object","additionalProperties":false,"properties":{"minify":{"type":"boolean"}}},"TextReporterOptionsType":{"type":"object","additionalProperties":false,"properties":{"highlightFocused":{"type":"boolean"}}},"DotReporterOptionsType":{"type":"object","additionalProperties":false,"properties":{"collapsePattern":{"$ref":"#/definitions/REAsStringsType"},"filters":{"$ref":"#/definitions/ReporterFiltersType"},"showMetrics":{"type":"boolean"},"theme":{"$ref":"#/definitions/DotThemeType"}}},"DotThemeType":{"type":"object","additionalProperties":false,"properties":{"replace":{"type":"boolean"},"graph":{"type":"object"},"node":{"type":"object"},"edge":{"type":"object"},"modules":{"$ref":"#/definitions/DotThemeArrayType"},"dependencies":{"$ref":"#/definitions/DotThemeArrayType"}}},"DotThemeArrayType":{"type":"array","items":{"$ref":"#/definitions/DotThemeEntryType"}},"DotThemeEntryType":{"type":"object","additionalProperties":false,"properties":{"criteria":{"type":"object"},"attributes":{"type":"object"}}},"ReporterFiltersType":{"type":"object","additionalProperties":false,"properties":{"exclude":{"$ref":"#/definitions/CompoundExcludeType"},"includeOnly":{"$ref":"#/definitions/CompoundIncludeOnlyType"},"focus":{"$ref":"#/definitions/CompoundFocusType"},"reaches":{"$ref":"#/definitions/CompoundReachesType"}}},"ViolationsType":{"type":"array","items":{"$ref":"#/definitions/ViolationType"}},"ViolationType":{"type":"object","required":["from","to","rule"],"additionalProperties":false,"properties":{"from":{"type":"string"},"to":{"type":"string"},"type":{"$ref":"#/definitions/ViolationTypeType"},"rule":{"$ref":"#/definitions/RuleSummaryType"},"cycle":{"type":"array","items":{"type":"string"}},"via":{"type":"array","items":{"type":"string"}},"metrics":{"type":"object","required":["from","to"],"additionalProperties":false,"properties":{"from":{"type":"object","required":["instability"],"additionalProperties":false,"properties":{"instability":{"type":"number"}}},"to":{"type":"object","required":["instability"],"additionalProperties":false,"properties":{"instability":{"type":"number"}}}}},"comment":{"type":"string"}}},"RuleSummaryType":{"type":"object","required":["name","severity"],"additionalProperties":false,"properties":{"name":{"type":"string"},"severity":{"$ref":"#/definitions/SeverityType"}}},"ViolationTypeType":{"type":"string","enum":["dependency","module","reachability","cycle","instability","folder"]},"CacheOptionsType":{"type":"object","additionalProperties":false,"properties":{"folder":{"type":"string"},"strategy":{"$ref":"#/definitions/CacheStrategyType"},"compress":{"type":"boolean","default":false}}},"CacheStrategyType":{"type":"string","enum":["metadata","content"]},"ExtendsType":{"oneOf":[{"type":"string"},{"type":"array","items":{"type":"string"}}]}}}