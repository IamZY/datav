const alerting = {
    addChannel: 'Add channel',
    editChannel: 'Edit channel',
    deleteChannel: 'Delete notification channel',
    deleteChannelTips: 'Do you want to delete this notification channel?',
    notificationNotExist: 'A notification not exist any more, so we remove it for you',
    stateFilter: 'State filter',
    teamFilter: 'Team filter',
    pauseTooltip: 'Pausing an alert rule prevents it from executing',
    editTooltip: 'Edit alert rule',
    historiesCount: `Last {count} alert history`,
    editChannelDefaultTips: 'Use this notification for all alerts',
    ignoreOkMessage: 'Disable Resolve Message',
    ignoreOkMessageTips: 'Disable the resolve message [OK] that is sent when alerting state returns to ok',

    // panel alerting tab
    dsNotSupport: 'The datasource does not support alerting queries',
    templateNotSupport: 'Template variables are not supported in alert queries',
    metricNotFound: 'Could not find any metric queries',
    frequencyWarning:  `A minimum evaluation interval of {interval}  have been configured in Grafana and will be used for this alert rule. ' +
   'Please contact the administrator to configure a lower interval.`,
   frequencyInvalid: `Invalid interval string, has to be either unit-less or end with one of the following units: "y, M, w, d, h, m, s, ms"`,
    testRule: 'Testing Rule',
    deleteRuleConfirm: 'Are you sure you want to delete this alert rule?',
    deleteRuleTips: 'You need to save dashboard for the delete to take effect.',
    deleteConfirmText : 'Delete Alert',
    evaFirstParamError: 'First param label name must be __Default',
    evalParamLabelUseDefault: 'Cant use __Default as custom label name',
    evalParamSame: 'Same label value cant exist under same label name',
    emptyAlertTitle: 'Panel has no alert rule defined',
    emptyAlertButton: 'Create Alert',
    evaluateEvery: 'Evaluate every',
    forToooltip: "If an alert rule has a configured For and the query violates the configured threshold it will first go from OK to Pending. Going from OK to Pending Grafana will not send any notifications. Once the alert rule has been firing for more than For duration, it will change to Alerting and send alert notifications.",
    conditions: 'Conditions',
    conditionTips: '',
    noDataTitle: 'No Data & Error Handling',
    noDataLabel: 'If no data or all values are null',
    excecutionErrorLabel: 'If execution error or timeout',
    setStateTo: 'SET STATE TO',
    sendTo: 'Send to',
    commonCases: 'COMMON CASES',
    setExcetpions:'SET EXCEPTIONS',
    messagePlaceholder: 'Notification message details...',
    excepitonTitle: 'Set exceptions for notification',
    //email notifier
    emailSettings: 'Email settings',
    emailAddrTips: `You can enter multiple email addresses using a ";" separator`,
}

export default alerting