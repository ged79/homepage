export async function POST(request) {
  try {
    const body = await request.json();
    
    // 데이터를 파일로 저장 (임시방편)
    const fs = require('fs').promises;
    const path = require('path');
    const filename = `quote_${Date.now()}.json`;
    const filepath = path.join(process.cwd(), 'public', filename);
    
    await fs.writeFile(filepath, JSON.stringify({
      ...body,
      timestamp: new Date().toISOString(),
      recipient: 'conexus25@conexus.co.kr'
    }, null, 2));
    
    console.log('=== 견적 요청 저장 ===');
    console.log('파일:', filename);
    console.log('이름:', body.name);
    console.log('연락처:', body.phone);
    console.log('==================');
    
    return Response.json({ 
      success: true,
      message: '요청이 접수되었습니다.'
    });
    
  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}