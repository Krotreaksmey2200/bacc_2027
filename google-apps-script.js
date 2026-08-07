// Google Apps Script - Deploy as Web App
// របៀបប្រើ៖
// 1. ទៅ https://script.google.com
// 2. ចុច "New project"
// 3. ចម្លង code នេះ
// 4. បង្កើត Google Sheet ថ្មី
// 5. Deploy → Web app → Execute as: Me → Who has access: Anyone

function doGet(e) {
    var action = e.parameter.action;
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    if (action === 'users') {
        // Return all users
        var usersSheet = sheet.getSheetByName('Users');
        if (!usersSheet) {
            usersSheet = sheet.insertSheet('Users');
            usersSheet.appendRow(['ID', 'Name', 'Email', 'Photo', 'First Login', 'Last Login']);
        }
        
        var data = usersSheet.getDataRange().getValues();
        var users = [];
        for (var i = 1; i < data.length; i++) {
            users.push({
                id: data[i][0],
                name: data[i][1],
                email: data[i][2],
                photo: data[i][3],
                firstLogin: data[i][4],
                lastLogin: data[i][5]
            });
        }
        
        return ContentService.createTextOutput(JSON.stringify(users))
            .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === 'activity') {
        // Return all activity
        var activitySheet = sheet.getSheetByName('Activity');
        if (!activitySheet) {
            activitySheet = sheet.insertSheet('Activity');
            activitySheet.appendRow(['Action', 'User ID', 'User Name', 'User Email', 'Page', 'Timestamp']);
        }
        
        var data = activitySheet.getDataRange().getValues();
        var activity = [];
        for (var i = 1; i < data.length; i++) {
            activity.push({
                action: data[i][0],
                userId: data[i][1],
                userName: data[i][2],
                userEmail: data[i][3],
                page: data[i][4],
                timestamp: data[i][5]
            });
        }
        
        return ContentService.createTextOutput(JSON.stringify(activity))
            .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({error: 'Invalid action'}))
        .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    if (data.action === 'login') {
        // Log login
        var usersSheet = sheet.getSheetByName('Users');
        if (!usersSheet) {
            usersSheet = sheet.insertSheet('Users');
            usersSheet.appendRow(['ID', 'Name', 'Email', 'Photo', 'First Login', 'Last Login']);
        }
        
        // Check if user exists
        var usersData = usersSheet.getDataRange().getValues();
        var userExists = false;
        var userRow = -1;
        
        for (var i = 1; i < usersData.length; i++) {
            if (usersData[i][0] === data.userId) {
                userExists = true;
                userRow = i + 1;
                break;
            }
        }
        
        var now = new Date().toLocaleString('km-KH');
        
        if (userExists) {
            // Update last login
            usersSheet.getRange(userRow, 6).setValue(now);
        } else {
            // Add new user
            usersSheet.appendRow([
                data.userId,
                data.userName,
                data.userEmail,
                data.userPhoto,
                now,
                now
            ]);
        }
    }
    
    // Log activity
    var activitySheet = sheet.getSheetByName('Activity');
    if (!activitySheet) {
        activitySheet = sheet.insertSheet('Activity');
        activitySheet.appendRow(['Action', 'User ID', 'User Name', 'User Email', 'Page', 'Timestamp']);
    }
    
    activitySheet.appendRow([
        data.action,
        data.userId,
        data.userName,
        data.userEmail,
        data.page,
        new Date().toLocaleString('km-KH')
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
        .setMimeType(ContentService.MimeType.JSON);
}
