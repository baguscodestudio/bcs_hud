local Settings = {
    HelpPosition = 'top-left',
    HelpAudio = true,
    NotificationStyle = 'clean', -- clean or transparent
    NotificationPosition = 'top-right',
    NotificationAudio = true,
    Volume = 1
}
local Promise = nil
local Locale = {
    ['accept'] = 'Accept',
    ['decline'] = 'Decline',
    ['submit'] = 'Submit'
}

RegisterNUICallback('initialize', function(data, cb)
    cb({
        locale=Locale
    })
end)

RegisterNUICallback('hideFrame', function(data, cb)
    SetNuiFocus(false, false)
    if Promise then
        Promise:resolve(nil)
        Promise = nil
    end
    cb(1)
end)

-- Notification

function SendAlert(title, message, type, duration, position)
    SendNUIMessage({
        action='sendAlert',
        data={
            title=title,
            message=message,
            type=type,
            play=Settings.NotificationAudio,
            volume=Settings.Volume,
            style=Settings.NotificationStyle,
            position=position or Settings.NotificationPosition,
            duration=duration
        }
    })
end

RegisterNetEvent('hud:SendAlert')
AddEventHandler('hud:SendAlert', SendAlert)

exports('SendAlert', SendAlert)

-- Help Text

RegisterNetEvent('hud:displayHelp')
AddEventHandler('hud:displayHelp', displayHelp)

RegisterNetEvent('hud:closeHelp')
AddEventHandler('hud:closeHelp', closeHelp)

function displayHelp(text, position)
    SendNUIMessage({
        action="displayHelp",
        data={
            text=text,
            play=Settings.HelpAudio,
            volume=Settings.Volume,
            position=position or Settings.HelpPosition
        }
    })
end

function closeHelp()
    SendNUIMessage({
        action="closeHelp",
        data={}
    })
end

exports('displayHelp', displayHelp)
exports('closeHelp', closeHelp)

-- Settings stuff

RegisterNUICallback('saveSettings', function(data, cb)
    Settings = data
    cb(1)
end)

RegisterCommand('hudsettings', function()
    SendNUIMessage({
        action='settings',
        data=true
    })
    SetNuiFocus(true, true)
end)

-- Modal Stuff

RegisterNUICallback('acceptModal', function(data, cb)
    Promise:resolve(true)
    Promise = nil
    cb(1)
end)

RegisterNUICallback('declineModal', function(data, cb)
    Promise:resolve(false)
    Promise = nil
    cb(1)
end)

exports('openModal', function(title, text, acceptCb, declineCb)
    SendNUIMessage({
        action="openModal",
        data={
            title=title,
            text=text,
        }
    })
    SetNuiFocus(true, true)

    Promise = promise.new()

    local accepted = Citizen.Await(Promise)
    if accepted then
        acceptCb()
    else
        declineCb()
    end
end)

exports('closeModal', function()
    SendNUIMessage({
        action="closeModal",
        data={}
    })
end)

-- Input Keyboard

RegisterNUICallback('submitKeyboard', function(data, cb)
    Promise:resolve(data)
    Promise = nil

    cb(1)
end)

-- Taken from nh-keyboard https://github.com/nerohiro/nh-keyboard/blob/4167ed31c363738db72c51e124273256781899a3/client.lua#L29
-- Credits to Nerohiro
UnpackInput = function(kb, i)
    if not kb then return end
    local index = i or 1
    
    if index <= #kb then
        return kb[index], UnpackInput(kb, index + 1)
    end
end

exports('keyboard', function(title, rows)
    SendNUIMessage({
        action="openInputKeyboard",
        data= {
            title=title,
            rows=rows
        }
    })
    SetNuiFocus(true, true)
    Promise = promise.new()

    local results = Citizen.Await(Promise)
    return results and true or false, UnpackInput(results)
end)

exports('keybind', function(data)
    data.position = data.position or 'center-right'
    SendNUIMessage({
        action="keybind",
        data= data
    })
end)

exports('closeKeybind', function()
    SendNUIMessage({
        action='closeKeybind',
    })
end)

RegisterCommand('testnotify', function()
    -- Default notification position is on top right
    exports['bcs_hud']:SendAlert('Title Here', 'Message of notification here!', 'success', 3000)
    Wait(1000)
    exports['bcs_hud']:SendAlert('Title Here', 'Message of notification here!', 'error', 3000, 'bottom-right')
    Wait(1000)
    exports['bcs_hud']:SendAlert('Title Here', 'Message of notification here!', 'warning', 3000, 'bottom-left')
    Wait(1000)
    exports['bcs_hud']:SendAlert('Title Here', 'Message of notification here!', 'info', 3000, 'top-center')
end)

RegisterCommand('testhelp', function()
    -- default position is on top-left
    exports['bcs_hud']:displayHelp('Press ~E~ to open something')
    Wait(1500)
    exports['bcs_hud']:closeHelp()
    exports['bcs_hud']:displayHelp('Press ~E~ to open something', 'center-right')
    Wait(1500)
    exports['bcs_hud']:closeHelp()
    exports['bcs_hud']:displayHelp('Press ~E~ to open something', 'top-right')
    Wait(1500)
    exports['bcs_hud']:closeHelp()
    exports['bcs_hud']:displayHelp('Press ~E~ to open something', 'bottom-right')
    Wait(1500)
    exports['bcs_hud']:closeHelp()
    exports['bcs_hud']:displayHelp('Press ~E~ to open something', 'top-center')
    Wait(1500)
    exports['bcs_hud']:closeHelp()    
    exports['bcs_hud']:displayHelp('Press ~E~ to open something', 'bottom-right')
    Wait(1500)
    exports['bcs_hud']:closeHelp()    
end)

RegisterCommand('testkeyboard', function()
    local result, row1, row2, row3, row4 = exports['bcs_hud']:keyboard('The title here', {
        {title='Text Input'},
        {title='Number input', type='number'},
        {title='Text input with placeholder', placeholder='Place your holder here'},
        {title='Other variation of input', type='password'}
    })
    print(result, row1, row2, row3, row4)
end)

RegisterCommand('testdialog', function()
    exports['bcs_hud']:openModal('Confirmation Title','Are you sure you want to confirm this?', function()
        print('accepted')
    end, function()
        print('declined!')
    end)
end)